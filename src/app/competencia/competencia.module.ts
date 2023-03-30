import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ListarCompetenciasComponent } from './listar-competencias/listar-competencias.component';
import { EliminarCompetenciasComponent } from './eliminar-competencias/eliminar-competencias.component';
import { EditarCompetenciasComponent } from './editar-competencias/editar-competencias.component';
import { AgregarCompetenciasComponent } from './agregar-competencias/agregar-competencias.component';

@NgModule({
  declarations: [
    ListarCompetenciasComponent,
    EliminarCompetenciasComponent,
    EditarCompetenciasComponent,
    AgregarCompetenciasComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule
  ]
})
export class CompetenciaModule { }
