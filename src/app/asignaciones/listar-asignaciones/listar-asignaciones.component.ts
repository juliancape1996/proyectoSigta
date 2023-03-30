import { Component } from '@angular/core';
import { AsignacionService } from 'src/app/services/asignacion.service';

@Component({
  selector: 'app-listar-asignaciones',
  templateUrl: './listar-asignaciones.component.html',
  styleUrls: ['./listar-asignaciones.component.css']
})
export class ListarAsignacionesComponent {
  listaAsignaciones:any 
  constructor(private asigancionService:AsignacionService){}


  ngOnInit(): void {
    this.asigancionService.listarAsignaciones().subscribe(data=>{
      this.listaAsignaciones=data
    })
  }
}
