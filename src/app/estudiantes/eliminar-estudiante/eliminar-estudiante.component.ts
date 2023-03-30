import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EstudianteService } from 'src/app/services/estudiante.service';

@Component({
  selector: 'app-eliminar-estudiante',
  templateUrl: './eliminar-estudiante.component.html',
  styleUrls: ['./eliminar-estudiante.component.css']
})
export class EliminarEstudianteComponent {

  estudianteId: string = '';
  constructor(private estudianteService: EstudianteService, private router: Router, private activatedRoute: ActivatedRoute) { }
  ngOnInit(): void {
    this.activatedRoute.params.subscribe(data => {
      this.estudianteId = data['id']
    })

    if (this.estudianteId) {
      this.estudianteService.eliminarEstudiante(this.estudianteId).subscribe(data => {
        this.router.navigate(['/estudiantes/lista'])

      },err => {
        console.log(err);
      })

    }
  }

}


