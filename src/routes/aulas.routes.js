import { Router } from "express";
import { getAulas,getAula,createAula,updateAula,deleteAula } from "../controllers/aulas.controller.js";


const router = Router();

//todas las rutas de profesor
router.get('/aulas',getAulas);
router.get('/aulas/:id_aula',getAula);
router.post('/aulas',createAula);
router.put('/aulas/:id_aula',updateAula);
router.delete('/aulas/:id_aula',deleteAula);

export default router