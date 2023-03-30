import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CompetenciaService } from 'src/app/services/competencia.service';

@Component({
  selector: 'app-eliminar-competencias',
  templateUrl: './eliminar-competencias.component.html',
  styleUrls: ['./eliminar-competencias.component.css']
})
export class EliminarCompetenciasComponent {
  competenciaId: string = '';
  constructor(private competenciaService: CompetenciaService, private router: Router, private activatedRoute: ActivatedRoute) { }
  ngOnInit(): void {
    this.activatedRoute.params.subscribe(data => {
      this.competenciaId = data['id']
    })

    if (this.competenciaId) {
      this.competenciaService.eliminarCompetencia(this.competenciaId).subscribe(data => {
        this.router.navigate(['/competencias/lista'])

      },err => {
        console.log(err);
      })

    }
  }
}
