import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgregarMateriasComponent } from './agregar-materias/agregar-materias.component';
import { EditarMateriasComponent } from './editar-materias/editar-materias.component';
import { EliminarMateriasComponent } from './eliminar-materias/eliminar-materias.component';
import { RouterModule } from '@angular/router';

import { ListarMateriasComponent } from './listar-materias/listar-materias.component';


import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AgregarMateriasComponent,
    EditarMateriasComponent,
    EliminarMateriasComponent,
    ListarMateriasComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule
  ]
})
export class MateriasModule { }
