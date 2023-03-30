import { Component } from '@angular/core';
import { ProfesorService } from 'src/app/services/profesor.service';

@Component({
  selector: 'app-listar-profesor',
  templateUrl: './listar-profesor.component.html',
  styleUrls: ['./listar-profesor.component.css']
})
export class ListarProfesorComponent {
  listaProfesores:any 
  constructor(private profesorService:ProfesorService){}


  ngOnInit(): void {
    this.profesorService.listarProfesores().subscribe(data=>{
      this.listaProfesores=data
    })
  }
}
