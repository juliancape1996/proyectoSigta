import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AsignacionesComponent } from './asignaciones/asignaciones.component';
import { AulasComponent } from './aulas/aulas.component';
import { CompetenciasComponent } from './competencias/competencias.component';
import { EstudiantesComponent } from './estudiantes/estudiantes.component';
import { InicioComponent } from './inicio/inicio.component';
import { MateriasComponent } from './materias/materias.component';
import { ProfesoresComponent } from './profesores/profesores.component';

const routes: Routes = [
  {
    path:'',
    component:InicioComponent
  },
  {
    path:'profesores',
    component:ProfesoresComponent
  },
  {
    path:'estudiantes',
    component:EstudiantesComponent
  },
  {
    path:'materias',
    component:MateriasComponent
  },
  {
    path:'competencias',
    component:CompetenciasComponent
  },
  {
    path:'aulas',
    component:AulasComponent
  },
  {
    path:'asignaciones',
    component:AsignacionesComponent
  },
  {
    path:'**',
    redirectTo: '/',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
