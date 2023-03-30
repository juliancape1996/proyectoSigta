import { Component } from '@angular/core';
import { MateriasService } from 'src/app/services/materias.service';

@Component({
  selector: 'app-listar-materias',
  templateUrl: './listar-materias.component.html',
  styleUrls: ['./listar-materias.component.css']
})
export class ListarMateriasComponent {
  listaMaterias:any 
  constructor(private materiaSerivce:MateriasService){}


  ngOnInit(): void {
    this.materiaSerivce.listarMaterias().subscribe(data=>{
      this.listaMaterias=data
    })
  }
}
