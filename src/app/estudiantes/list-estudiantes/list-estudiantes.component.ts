import { Component } from '@angular/core';
import { EstudianteService } from 'src/app/services/estudiante.service';

@Component({
  selector: 'app-list-estudiantes',
  templateUrl: './list-estudiantes.component.html',
  styleUrls: ['./list-estudiantes.component.css']
})
export class ListEstudiantesComponent {
  listaEstudiantes:any 
  constructor(private estudianteService:EstudianteService){}


  ngOnInit(): void {
    this.estudianteService.listarEstudiantes().subscribe(data=>{
      this.listaEstudiantes=data
    })
  }
}
