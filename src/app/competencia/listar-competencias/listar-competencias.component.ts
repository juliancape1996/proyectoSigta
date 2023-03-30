import { Component } from '@angular/core';
import { CompetenciaService } from 'src/app/services/competencia.service';

@Component({
  selector: 'app-listar-competencias',
  templateUrl: './listar-competencias.component.html',
  styleUrls: ['./listar-competencias.component.css']
})
export class ListarCompetenciasComponent {
  listaCompetencias:any 
  constructor(private competenciaService:CompetenciaService){}


  ngOnInit(): void {
    this.competenciaService.listarCompetencias().subscribe(data=>{
      this.listaCompetencias=data
    })
  }
}
