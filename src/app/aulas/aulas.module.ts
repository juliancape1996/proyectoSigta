import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AgregarAulasComponent } from './agregar-aulas/agregar-aulas.component';
import { EditarAulasComponent } from './editar-aulas/editar-aulas.component';
import { EliminarAulasComponent } from './eliminar-aulas/eliminar-aulas.component';
import { ListarAulasComponent } from './listar-aulas/listar-aulas.component';



@NgModule({
  declarations: [
    AgregarAulasComponent,
    EditarAulasComponent,
    EliminarAulasComponent,
    ListarAulasComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule
  ]
})
export class AulasModule { }
