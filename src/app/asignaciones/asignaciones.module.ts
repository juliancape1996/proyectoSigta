import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EliminarAsignacionesComponent } from './eliminar-asignaciones/eliminar-asignaciones.component';
import { ListarAsignacionesComponent } from './listar-asignaciones/listar-asignaciones.component';
import { AgregarAsignacionesComponent } from './agregar-asignaciones/agregar-asignaciones.component';
import { EditarAsignacionesComponent } from './editar-asignaciones/editar-asignaciones.component';



import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    EliminarAsignacionesComponent,
    ListarAsignacionesComponent,
    AgregarAsignacionesComponent,
    EditarAsignacionesComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule
  ]
})
export class AsignacionesModule { }
