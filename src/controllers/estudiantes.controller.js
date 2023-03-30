import { con } from "../database/conexion.js";

//obtener estudiantes
export const getEstudiantes = async (req, res)=>{    
    try {
        const [filas] = await con.query('SELECT * FROM estudiantes');
        res.json(filas);
    } catch (error) {
        return res.status(500).json({
            message:'Ups algo fue mal'
        })
    }
}

//obtener un estudiante
export const getEstudiante = async (req, res)=>{
    try {
        const id_estudiante = req.params.id_estudiante;
        const [result]= await con.query('SELECT* FROM estudiantes WHERE id_estudiante=?',[id_estudiante]);

        if (result.length <=0) {
            return res.status(404).json({
                message:'Estudiante no encontrado'
            });
        }
        res.json(result[0]);

    } catch (error) {
        return res.status(500).json({
            message:'Ups algo fue mal'
        })
    }
}

//Crear estudiante
export const createEstudiante  = async (req, res)=>{
    try {
        const nombreEstudiante = req.body.nombre_estudiante;
        const correo= req.body.correo_electronico;
        const telefono= req.body.telefono;
        const direccion= req.body.direccion;

        const [filas]= await con.query('INSERT INTO estudiantes (nombre_estudiante,correo_electronico,telefono,direccion) VALUES (?,?,?,?)',[nombreEstudiante,correo,telefono,direccion]);

        res.send({
            id_estudiante: filas.insertId,
            nombreEstudiante,
            correo,
            telefono,
            direccion
        })

        
    } catch (error) {
        return res.status(500).json({
            message:'Ups algo fue mal'
        })
    }
}

//Actualizar estudiante
export const updateEstudiante  = async (req, res)=>{
    try {
        const id_estudiante = req.params.id_estudiante;
        const nombreEstudiante = req.body.nombre_estudiante;
        const correo= req.body.correo_electronico;
        const telefono= req.body.telefono;
        const direccion= req.body.direccion;

       
        const [result] = await con.query('UPDATE estudiantes SET nombre_estudiante=?, correo_electronico=?, telefono=?, direccion=? WHERE id_estudiante=?',[nombreEstudiante,correo,telefono,direccion,id_estudiante]);
        console.log(result);
        if (result.affectedRows <=0 ) {
            return res.status(404).json({
                message:'Estudiante no encontrado'
            });
        }
 
        
        const [filas] = await con.query('SELECT* FROM estudiantes WHERE id_estudiante=?',[id_estudiante]);
        res.send(filas)
        
    } catch (error) {
        return res.status(500).json({
            message:'Ups algo fue mal'
        })
    }
}

//Eliminar estudiante
export const deleteEstudiante  = async (req, res)=>{
    try {
        const id_estudiante = req.params.id_estudiante;
        const[result] = await con.query('DELETE FROM estudiantes WHERE id_estudiante=?',[id_estudiante]);
        
        
        if (result.affectedRows <=0) {
            return res.status(404).json({
                message: 'Estudiante no encontrado'
            });
        }
        res.sendStatus(204);
    } catch (error) {
        return res.status(500).json({
            message:'Ups algo fue mal'
        })
    }
}