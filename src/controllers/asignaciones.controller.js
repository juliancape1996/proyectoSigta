import { con } from "../database/conexion.js";

// LISTAR TODAS LA ASIGNACIONES ACTIVAS
export const getAsignaciones = async (req ,res )=>{
    try {
        const [filas] = await con.query("SELECT asig.id_asignacion,pr.nombre_profesor,es.nombre_estudiante,aul.numero_de_aula,co.nombre_de_competencia, ma.nombre_de_materia,asig.horario,asig.completado FROM asignacion asig INNER JOIN profesores pr ON asig.id_profesor = pr.id_profesor INNER JOIN estudiantes es ON asig.id_estudiante= es.id_estudiante INNER JOIN aulas aul ON asig.id_aula = aul.id_aula INNER JOIN competencias co ON asig.id_competencia = co.id_competencia INNER JOIN materias ma ON asig.id_materia = ma.id_materia WHERE estado='ACTIVO'");
        res.json(filas);

    } catch (error) {
        return res.status(500).json({
            message: 'Ups algo salio mal'
        })    
    }
}

// LISTAR TODAS LA ASIGNACIONES INACTIVAS
export const getAsignacionesInac = async (req ,res )=>{
    try {
        const [filas] = await con.query("SELECT asig.id_asignacion,pr.nombre_profesor,es.nombre_estudiante,aul.numero_de_aula,co.nombre_de_competencia, ma.nombre_de_materia,asig.horario,asig.completado FROM asignacion asig INNER JOIN profesores pr ON asig.id_profesor = pr.id_profesor INNER JOIN estudiantes es ON asig.id_estudiante= es.id_estudiante INNER JOIN aulas aul ON asig.id_aula = aul.id_aula INNER JOIN competencias co ON asig.id_competencia = co.id_competencia INNER JOIN materias ma ON asig.id_materia = ma.id_materia WHERE estado='INACTIVO'");
        res.json(filas);

    } catch (error) {
        return res.status(500).json({
            message: 'Ups algo salio mal'
        })    
    }
}

//LISTAR UNA ASIGNACION
export const getAsignacion = async(req,res)=>{
    try {
        const id_asignacion = req.params.id_asignacion;
        const [result] = await con.query('SELECT asig.id_asignacion,pr.nombre_profesor,es.nombre_estudiante,aul.numero_de_aula,co.nombre_de_competencia, ma.nombre_de_materia,asig.horario,asig.completado FROM asignacion asig INNER JOIN profesores pr ON asig.id_profesor = pr.id_profesor INNER JOIN estudiantes es ON asig.id_estudiante= es.id_estudiante INNER JOIN aulas aul ON asig.id_aula = aul.id_aula INNER JOIN competencias co ON asig.id_competencia = co.id_competencia INNER JOIN materias ma ON asig.id_materia = ma.id_materia WHERE id_asignacion=?',[id_asignacion]);

        if (result.length <=0) {
            return res.status(404).json({
                message:'Asignacion no encontrada'
            })
        }
        res.json(result[0])

    } catch (error) {
        return res.status(500).json({
            message:'Ups algo salio mal'
        })
    }
}

//CREAR ASIGNACION
export const createAsignacion = async(req,res)=>{
    try {
        const id_profesor = req.body.id_profesor;
        const id_estudiante = req.body.id_estudiante;
        const id_aula = req.body.id_aula;
        const id_competencia = req.body.id_competencia;
        const id_materia = req.body.id_materia;
        const horario = req.body.horario;
        const completado = req.body.completado;
    
        const [filas]= await con.query('INSERT INTO asignacion( id_profesor, id_estudiante, id_aula, id_competencia, id_materia, horario, completado) VALUES (?,?,?,?,?,?,?)',
        [id_profesor,id_estudiante,id_aula,id_competencia,id_materia,horario,completado]);

       
        res.send({
            id_asignacion:filas.insertId,
            id_profesor,
            id_estudiante,
            id_aula,
            id_competencia,
            id_materia,
            horario,
            completado
        });

    } catch (error) {
        return res.status(500).json({
            message:'Ups algo salio mal'
        })
    }
}


//ACTUALIZAR ASIGNACION
export const updateAsignacion= async(req,res)=>{
    try {
        const id_asignacion = req.params.id_asignacion;
        const id_profesor = req.body.id_profesor;
        const id_estudiante = req.body.id_estudiante;
        const id_aula = req.body.id_aula;
        const id_competencia = req.body.id_competencia;
        const id_materia = req.body.id_materia;
        const horario = req.body.horario;
        const completado = req.body.completado;

        const [ result] = await con.query('UPDATE asignacion SET id_profesor=?,id_estudiante=?,id_aula=?,id_competencia=?,id_materia=?,horario=?,completado=? WHERE id_asignacion=?',[id_profesor,id_estudiante,id_aula,id_competencia,id_materia,horario,completado,id_asignacion]);
        if (result.affectedRows <= 0) {
            return res.status(404).json({
                message:'Asignacion no fue encontrada'
            });
        }

            const [filas] = await con.query('SELECT asig.id_asignacion,pr.nombre_profesor,es.nombre_estudiante,aul.numero_de_aula,co.nombre_de_competencia, ma.nombre_de_materia,asig.horario,asig.completado FROM asignacion asig INNER JOIN profesores pr ON asig.id_profesor = pr.id_profesor INNER JOIN estudiantes es ON asig.id_estudiante= es.id_estudiante INNER JOIN aulas aul ON asig.id_aula = aul.id_aula INNER JOIN competencias co ON asig.id_competencia = co.id_competencia INNER JOIN materias ma ON asig.id_materia = ma.id_materia WHERE id_asignacion=?',[id_asignacion]);
        res.send(filas);
        
        
    } catch (error) {
        return res.status(500).json({
            message:'Ups algo salio mal'
        })
    }
}


//ELIMINAR ASIGNACION
export const deleteAsignacion = async(req,res)=>{
    try {
        const id_asignacion = req.params.id_asignacion;
        const [result]= await con.query("UPDATE asignacion SET estado='INACTIVO' WHERE id_asignacion=? ",[id_asignacion]);

        if (result.affectedRows <=0) {
            return res.status(404).json({
                message: 'Asignacion no encontrado'
            });
        }
        res.sendStatus(204);
        
    } catch (error) {
        return res.status(500).json({
            message:'Ups algo salio mal'
        })
    }
}


//ACTUALIZAR DE INACTIVO A ACTIVO
export const activarAsignacion = async(req,res)=>{
    try {
        const id_asignacion = req.params.id_asignacion;
        const [result]= await con.query("UPDATE asignacion SET estado='ACTIVO' WHERE id_asignacion=? ",[id_asignacion]);

        if (result.affectedRows <=0) {
            return res.status(404).json({
                message: 'Asignacion no encontrado'
            });
        }
        res.sendStatus(204);
        
    } catch (error) {
        return res.status(500).json({
            message:'Ups algo salio mal'
        })
    }
}
