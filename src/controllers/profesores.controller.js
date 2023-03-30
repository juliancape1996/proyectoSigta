import { con } from "../database/conexion.js";

//obtener profesores
export const getProfesores = async (req, res)=>{    
    try {
        const [filas] = await con.query('SELECT * FROM profesores');
        res.json(filas);
    } catch (error) {
        return res.status(500).json({
            message:'Ups algo fue mal'
        })
    }
}

//obtener un profesor
export const getProfesor = async (req, res)=>{
    try {
        const id_profesor = req.params.id_profesor;
        const [result]= await con.query('SELECT* FROM profesores WHERE id_profesor=?',[id_profesor]);

        if (result.length <=0) {
            return res.status(404).json({
                message:'Profesor no encontrado'
            });
        }
        res.json(result[0]);

    } catch (error) {
        return res.status(500).json({
            message:'Ups algo fue mal'
        })
    }
}

//Crear profesores
export const createProfesor = async (req, res)=>{
    try {
        const nombreProfesor = req.body.nombre_profesor;
        const correo= req.body.correo_electronico;
        const telefono= req.body.telefono;
        const direccion= req.body.direccion;

        const [filas]= await con.query('INSERT INTO  profesores (nombre_profesor,correo_electronico,telefono,direccion) VALUES (?,?,?,?)',[nombreProfesor,correo,telefono,direccion]);

        res.send({
            id_profesor: filas.insertId,
            nombreProfesor,
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

//Actualizar profesores
export const updateProfesor = async (req, res)=>{
    try {
        const id_profesor = req.params.id_profesor;
        const nombreProfesor = req.body.nombre_profesor;
        const correo= req.body.correo_electronico;
        const telefono= req.body.telefono;
        const direccion= req.body.direccion;

       
        const [result] = await con.query('UPDATE profesores SET nombre_profesor=?, correo_electronico=?, telefono=?, direccion=? WHERE id_profesor=?',[nombreProfesor,correo,telefono,direccion,id_profesor]);
        console.log(result);
        if (result.affectedRows <=0 ) {
            return res.status(404).json({
                message:'Profesor no encontrado'
            });
        }
 
        
        const [filas] = await con.query('SELECT* FROM profesores WHERE id_profesor=?',[id_profesor]);
        res.send(filas)
        
    } catch (error) {
        return res.status(500).json({
            message:'Ups algo fue mal'
        })
    }
}

//Eliminar Profesores
export const deleteProfesor = async (req, res)=>{
    try {
        const id_profesor = req.params.id_profesor;
        const[result] = await con.query('DELETE FROM profesores WHERE id_profesor=?',[id_profesor]);
        
        
        if (result.affectedRows <=0) {
            return res.status(404).json({
                message: 'Profesor no encontrado'
            });
        }
        res.sendStatus(204);
    } catch (error) {
        return res.status(500).json({
            message:'Ups algo fue mal'
        })
    }
}