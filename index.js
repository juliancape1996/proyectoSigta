import express from 'express';
import cors from 'cors';
import  profesorRoutes  from "./src/routes/profesores.routes.js";
import materiaRoutes from "./src/routes/materias.routes.js";
import  estudianteRoutes  from "./src/routes/estudiantes.routes.js";
import  competenciaRoutes  from "./src/routes/competencias.routes.js";
import  aulaRoutes  from "./src/routes/aulas.routes.js";
import  asignacionesRoutes  from "./src/routes/asignaciones.routes.js";
import {PORT} from './config.js';

const app = express();

app.use(express.json());
app.use(cors());

app.use(profesorRoutes);
app.use(materiaRoutes);
app.use(estudianteRoutes);
app.use(competenciaRoutes);
app.use(aulaRoutes);
app.use(asignacionesRoutes);


app.listen(PORT,()=>{
    console.log('http://localhost:'+PORT);
});