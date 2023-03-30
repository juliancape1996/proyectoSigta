import { Router } from "express";
import { getMaterias,getMateria,createMateria,updateMateria,deleteMateria } from "../controllers/materias.controller.js";

const router = Router();

//todas las rutas de profesor
router.get('/materias',getMaterias);
router.get('/materias/:id_materia',getMateria);
router.post('/materias',createMateria);
router.put('/materias/:id_materia',updateMateria);
router.delete('/materias/:id_materia',deleteMateria);

export default router