import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgregarProfesorComponent } from './agregar-profesor/agregar-profesor.component';
import { ListarProfesorComponent } from './listar-profesor/listar-profesor.component';
import { EditarProfesorComponent } from './editar-profesor/editar-profesor.component';
import { EliminarProfesorComponent } from './eliminar-profesor/eliminar-profesor.component';

import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    AgregarProfesorComponent,
    ListarProfesorComponent,
    EditarProfesorComponent,
    EliminarProfesorComponent,

  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule
  ]
})
export class ProfesoresModule { }
