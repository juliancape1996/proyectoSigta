import { con } from "../database/conexion.js";

// LISTAR TODAS LA MATERIAS
export const getMaterias = async (req ,res )=>{
    try {
        const [filas] = await con.query('SELECT * FROM materias');
        res.json(filas);

    } catch (error) {
        return res.status(500).json({
            message: 'Ups algo salio mal'
        })    
    }
}

//LISTAR UNA MATERIA
export const getMateria = async(req,res)=>{
    try {
        const id_materia = req.params.id_materia;
        const [result] = await con.query('SELECT * FROM materias WHERE id_materia=?',[id_materia]);

        if (result.length <=0) {
            return res.status(404).json({
                message:'Materia no encontrada'
            })
        }
        res.json(result[0])

    } catch (error) {
        return res.status(500).json({
            message:'Ups algo salio mal'
        })
    }
}

//CREAR MATERIA
export const createMateria = async(req,res)=>{
    try {
        const nombreMateria = req.body.nombre_de_materia;
        const descripcion = req.body.descripcion;
        
        const [filas]= await con.query('INSERT INTO materias (nombre_de_materia,descripcion)VALUES(?,?)',[nombreMateria,descripcion]);

        res.send({
            id_materia:filas.insertId,
            nombreMateria,descripcion
        });

    } catch (error) {
        return res.status(500).json({
            message:'Ups algo salio mal'
        })
    }
}


//ACTUALIZAR MATERIA
export const updateMateria = async(req,res)=>{
    try {
        const id_materia = req.params.id_materia
        const nombreMateria = req.body.nombre_de_materia;
        const descripcion = req.body.descripcion;

        const [ result] = await con.query('UPDATE materias SET nombre_de_materia=?,descripcion=? WHERE id_materia=?',[nombreMateria,descripcion,id_materia]);
        if (result.affectedRows <= 0) {
            return res.status(404).json({
                message:'Materia no encontrada'
            });
        }

        const [filas] = await con.query('SELECT * FROM materias WHERE id_materia=?',[id_materia]);
        res.send(filas);
        
        
    } catch (error) {
        return res.status(500).json({
            message:'Ups algo salio mal'
        })
    }
}


//ELIMINAR MATERIA
export const deleteMateria = async(req,res)=>{
    try {
        const id_materia = req.params.id_materia
        const [result]= await con.query('DELETE FROM materias WHERE id_materia=?',[id_materia])

        if (result.affectedRows <=0) {
            return res.status(404).json({
                message: 'Materia no encontrado'
            });
        }
        res.sendStatus(204);
        
    } catch (error) {
        return res.status(500).json({
            message:'Ups algo salio mal'
        })
    }
}