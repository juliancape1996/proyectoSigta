import { Router } from "express";
import { getEstudiantes,getEstudiante,createEstudiante,updateEstudiante,deleteEstudiante } from "../controllers/estudiantes.controller.js";

const router = Router();

//todas las rutas de profesor
router.get('/estudiantes',getEstudiantes);
router.get('/estudiantes/:id_estudiante',getEstudiante);
router.post('/estudiantes',createEstudiante);
router.put('/estudiantes/:id_estudiante',updateEstudiante);
router.delete('/estudiantes/:id_estudiante',deleteEstudiante);

export default router