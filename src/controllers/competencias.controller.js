import { con } from "../database/conexion.js";

// LISTAR TODAS LA COMPETENCIAS
export const getCompetencias = async (req ,res )=>{
    try {
        const [filas] = await con.query('SELECT * FROM competencias');
        res.json(filas);

    } catch (error) {
        return res.status(500).json({
            message: 'Ups algo salio mal'
        })    
    }
}

//LISTAR UNA COMPETENCIAS
export const getCompetencia = async(req,res)=>{
    try {
        const id_competencia = req.params.id_competencia;
        const [result] = await con.query('SELECT * FROM competencias WHERE id_competencia=?',[id_competencia]);

        if (result.length <=0) {
            return res.status(404).json({
                message:'Competencia no encontrada'
            })
        }
        res.json(result[0])

    } catch (error) {
        return res.status(500).json({
            message:'Ups algo salio mal'
        })
    }
}

//CREAR COMPETENCIAS
export const createCompetencia = async(req,res)=>{
    try {
        const nombreCompetencia = req.body.nombre_de_competencia;
        const descripcion = req.body.descripcion;
        
        const [filas]= await con.query('INSERT INTO competencias (nombre_de_competencia,descripcion)VALUES(?,?)',[nombreCompetencia,descripcion]);

        res.send({
            id_competencia:filas.insertId,
            nombreCompetencia,
            descripcion
        });

    } catch (error) {
        return res.status(500).json({
            message:'Ups algo salio mal'
        })
    }
}


//ACTUALIZAR COMPETENCIAS
export const updateCompetencia= async(req,res)=>{
    try {
        const id_competencia = req.params.id_competencia
        const nombreCompetencia = req.body.nombre_de_competencia;
        const descripcion = req.body.descripcion;

        const [ result] = await con.query('UPDATE competencias SET nombre_de_competencia=?,descripcion=? WHERE id_competencia=?',[nombreCompetencia,descripcion,id_competencia]);
        if (result.affectedRows <= 0) {
            return res.status(404).json({
                message:'Competencia no encontrada'
            });
        }

        const [filas] = await con.query('SELECT * FROM competencias WHERE id_competencia=?',[id_competencia]);
        res.send(filas);
        
        
    } catch (error) {
        return res.status(500).json({
            message:'Ups algo salio mal'
        })
    }
}


//ELIMINAR COMPETENCIAS
export const deleteCompetencia = async(req,res)=>{
    try {
        const id_competencia = req.params.id_competencia
        const [result]= await con.query('DELETE FROM competencias WHERE id_competencia=?',[id_competencia])

        if (result.affectedRows <=0) {
            return res.status(404).json({
                message: 'Competencia no encontrado'
            });
        }
        res.sendStatus(204);
        
    } catch (error) {
        return res.status(500).json({
            message:'Ups algo salio mal'
        })
    }
}