import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgregarAsignacionesComponent } from './asignaciones/agregar-asignaciones/agregar-asignaciones.component';
import { EditarAsignacionesComponent } from './asignaciones/editar-asignaciones/editar-asignaciones.component';
import { EliminarAsignacionesComponent } from './asignaciones/eliminar-asignaciones/eliminar-asignaciones.component';
import { ListarAsignacionesComponent } from './asignaciones/listar-asignaciones/listar-asignaciones.component';
import { AgregarAulasComponent } from './aulas/agregar-aulas/agregar-aulas.component';
import { EditarAulasComponent } from './aulas/editar-aulas/editar-aulas.component';
import { EliminarAulasComponent } from './aulas/eliminar-aulas/eliminar-aulas.component';
import { ListarAulasComponent } from './aulas/listar-aulas/listar-aulas.component';
import { AgregarCompetenciasComponent } from './competencia/agregar-competencias/agregar-competencias.component';
import { EditarCompetenciasComponent } from './competencia/editar-competencias/editar-competencias.component';
import { EliminarCompetenciasComponent } from './competencia/eliminar-competencias/eliminar-competencias.component';
import { ListarCompetenciasComponent } from './competencia/listar-competencias/listar-competencias.component';
import { AgregarEstudianteComponent } from './estudiantes/agregar-estudiante/agregar-estudiante.component';
import { EditarEstudianteComponent } from './estudiantes/editar-estudiante/editar-estudiante.component';
import { EliminarEstudianteComponent } from './estudiantes/eliminar-estudiante/eliminar-estudiante.component';
import { ListEstudiantesComponent } from './estudiantes/list-estudiantes/list-estudiantes.component';
import { AgregarMateriasComponent } from './materias/agregar-materias/agregar-materias.component';
import { EditarMateriasComponent } from './materias/editar-materias/editar-materias.component';
import { EliminarMateriasComponent } from './materias/eliminar-materias/eliminar-materias.component';
import { ListarMateriasComponent } from './materias/listar-materias/listar-materias.component';
import { AgregarProfesorComponent } from './profesores/agregar-profesor/agregar-profesor.component';
import { EditarProfesorComponent } from './profesores/editar-profesor/editar-profesor.component';
import { EliminarProfesorComponent } from './profesores/eliminar-profesor/eliminar-profesor.component';
import { ListarProfesorComponent } from './profesores/listar-profesor/listar-profesor.component';




const routes: Routes = [
  {
    path:'estudiantes',
    children:[
      {path:'', component:ListEstudiantesComponent},
      {path:'lista', component: ListEstudiantesComponent},
      {path:'agregar', component: AgregarEstudianteComponent},
      {path:'editar/:id', component: EditarEstudianteComponent},
      {path:'eliminar/:id', component: EliminarEstudianteComponent}
    ]
  },
  {
    path:'profesores',
    children:[
      {path:'', component:ListarProfesorComponent},
      {path:'lista', component: ListarProfesorComponent},
      {path:'agregar', component: AgregarProfesorComponent},
      {path:'editar/:id', component: EditarProfesorComponent},
      {path:'eliminar/:id', component: EliminarProfesorComponent}
    ]
  },
  {
    path:'materias',
    children:[
      {path:'',component:ListarMateriasComponent},
      {path:'lista', component: ListarMateriasComponent},
      {path:'agregar', component: AgregarMateriasComponent},
      {path:'editar/:id', component: EditarMateriasComponent},
      {path:'eliminar/:id', component: EliminarMateriasComponent}
    ]
  },
  {
    path:'competencias',
    children:[
      {path:'',component:ListarCompetenciasComponent},
      {path:'lista', component: ListarCompetenciasComponent},
      {path:'agregar', component: AgregarCompetenciasComponent},
      {path:'editar/:id', component: EditarCompetenciasComponent},
      {path:'eliminar/:id', component: EliminarCompetenciasComponent}
    ]
  },
  {
    path:'aulas',
    children:[
      {path:'',component:ListarAulasComponent},
      {path:'lista', component: ListarAulasComponent},
      {path:'agregar', component: AgregarAulasComponent},
      {path:'editar/:id', component: EditarAulasComponent},
      {path:'eliminar/:id', component: EliminarAulasComponent}
    ]
  },
  {
    path:'asignaciones',
    children:[
      {path:'',component:ListarAsignacionesComponent},
      {path:'lista', component: ListarAsignacionesComponent},
      {path:'agregar', component: AgregarAsignacionesComponent},
      {path:'editar/:id', component: EditarAsignacionesComponent},
      {path:'eliminar/:id', component: EliminarAsignacionesComponent}
    ]
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
