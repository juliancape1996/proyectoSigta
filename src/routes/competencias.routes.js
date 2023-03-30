import { Router } from "express";
import { getCompetencias,getCompetencia,createCompetencia,updateCompetencia,deleteCompetencia } from "../controllers/competencias.controller.js";

const router = Router();

//todas las rutas de profesor
router.get('/competencias',getCompetencias);
router.get('/competencias/:id_competencia',getCompetencia);
router.post('/competencias',createCompetencia);
router.put('/competencias/:id_competencia',updateCompetencia);
router.delete('/competencias/:id_competencia',deleteCompetencia);

export default router