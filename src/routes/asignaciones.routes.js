import { Router } from "express";
import {getAsignaciones,getAsignacionesInac, getAsignacion, createAsignacion, updateAsignacion , deleteAsignacion,activarAsignacion } from "../controllers/asignaciones.controller.js";



const router = Router();

//todas las rutas de profesor
router.get('/asignaciones',getAsignaciones);
router.get('/asignacionesInac',getAsignacionesInac);
router.get('/asignaciones/:id_asignacion',getAsignacion);
router.post('/asignaciones',createAsignacion);
router.put('/asignaciones/:id_asignacion',updateAsignacion);
router.patch('/asignaciones/:id_asignacion',deleteAsignacion);
router.patch('/asignacionesAct/:id_asignacion',activarAsignacion);

export default router