import { Component } from '@angular/core';
import { AulasService } from 'src/app/services/aulas.service';

@Component({
  selector: 'app-listar-aulas',
  templateUrl: './listar-aulas.component.html',
  styleUrls: ['./listar-aulas.component.css']
})
export class ListarAulasComponent {
  listaAulas:any 
  constructor(private aulasService:AulasService){}


  ngOnInit(): void {
    this.aulasService.listarAulas().subscribe(data=>{
      this.listaAulas=data
    })
  }
}
