import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AgregarEstudianteComponent } from './agregar-estudiante/agregar-estudiante.component';
import { ReactiveFormsModule } from '@angular/forms';
import { EditarEstudianteComponent } from './editar-estudiante/editar-estudiante.component';
import { EliminarEstudianteComponent } from './eliminar-estudiante/eliminar-estudiante.component';
import { RouterModule } from '@angular/router';
import { ListEstudiantesComponent } from './list-estudiantes/list-estudiantes.component';




@NgModule({
  declarations: [
    ListEstudiantesComponent,
    AgregarEstudianteComponent,
    EditarEstudianteComponent,
    EliminarEstudianteComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule
  ]
})
export class EstudiantesModule { }
