import { Router } from "express";
import { getProfesores,getProfesor,createProfesor,updateProfesor,deleteProfesor } from "../controllers/profesores.controller.js";

const router = Router();

//todas las rutas de profesor
router.get('/profesor',getProfesores);
router.get('/profesor/:id_profesor',getProfesor);
router.post('/profesor',createProfesor);
router.put('/profesor/:id_profesor',updateProfesor);
router.delete('/profesor/:id_profesor',deleteProfesor);

export default router