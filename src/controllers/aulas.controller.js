import { con } from "../database/conexion.js";

// LISTAR TODAS LA AULA
export const getAulas = async (req ,res )=>{
    try {
        const [filas] = await con.query('SELECT * FROM aulas');
        res.json(filas);

    } catch (error) {
        return res.status(500).json({
            message: 'Ups algo salio mal'
        })    
    }
}

//LISTAR UNA AULA
export const getAula = async(req,res)=>{
    try {
        const id_aula = req.params.id_aula;
        const [result] = await con.query('SELECT * FROM aulas WHERE id_aula=?',[id_aula]);

        if (result.length <=0) {
            return res.status(404).json({
                message:'Aula no encontrada'
            })
        }
        res.json(result[0])

    } catch (error) {
        return res.status(500).json({
            message:'Ups algo salio mal'
        })
    }
}

//CREAR AULA
export const createAula = async(req,res)=>{
    try {
        const numeroAula = req.body.numero_de_aula;
        const capacidad = req.body.capacidad;
        const ubicacion = req.body.ubicacion;
        
        const [filas]= await con.query('INSERT INTO aulas (numero_de_aula,capacidad,ubicacion)VALUES(?,?,?)',[numeroAula,capacidad,ubicacion]);

        res.send({
            id_aula:filas.insertId,
            numeroAula,
            capacidad,
            ubicacion
        });

    } catch (error) {
        return res.status(500).json({
            message:'Ups algo salio mal'
        })
    }
}


//ACTUALIZAR AULA
export const updateAula= async(req,res)=>{
    try {
        const id_aula = req.params.id_aula;
        const numeroAula = req.body.numero_de_aula;
        const capacidad = req.body.capacidad;
        const ubicacion = req.body.ubicacion;

        const [ result] = await con.query('UPDATE aulas SET numero_de_aula=?,capacidad=?, ubicacion=?   WHERE id_aula=?',[numeroAula,capacidad,ubicacion,id_aula]);
        if (result.affectedRows <= 0) {
            return res.status(404).json({
                message:'aula no encontrada'
            });
        }

        const [filas] = await con.query('SELECT * FROM aulas WHERE id_aula=?',[id_aula]);
        res.send(filas);
        
        
    } catch (error) {
        return res.status(500).json({
            message:'Ups algo salio mal'
        })
    }
}


//ELIMINAR AULA
export const deleteAula = async(req,res)=>{
    try {
        const id_aula = req.params.id_aula;
        const [result]= await con.query('DELETE FROM aulas WHERE id_aula=? ',[id_aula]);

        if (result.affectedRows <=0) {
            return res.status(404).json({
                message: 'Aula no encontrado'
            });
        }
        res.sendStatus(204);
        
    } catch (error) {
        return res.status(500).json({
            message:'Ups algo salio mal'
        })
    }
}