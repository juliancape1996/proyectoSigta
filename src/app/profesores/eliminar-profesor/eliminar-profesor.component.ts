import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProfesorService } from 'src/app/services/profesor.service';

@Component({
  selector: 'app-eliminar-profesor',
  templateUrl: './eliminar-profesor.component.html',
  styleUrls: ['./eliminar-profesor.component.css']
})
export class EliminarProfesorComponent {

  profesorId: string = '';
  constructor(private profesorService: ProfesorService, private router: Router, private activatedRoute: ActivatedRoute) { }
  ngOnInit(): void {
    this.activatedRoute.params.subscribe(data => {
      this.profesorId = data['id']
    })

    if (this.profesorId) {
      this.profesorService.eliminarProfesore(this.profesorId).subscribe(data => {
        this.router.navigate(['/profesores/lista'])

      },err => {
        console.log(err);
      })

    }
  }
}
