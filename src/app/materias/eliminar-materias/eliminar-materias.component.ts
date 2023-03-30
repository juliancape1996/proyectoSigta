import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MateriasService } from 'src/app/services/materias.service';

@Component({
  selector: 'app-eliminar-materias',
  templateUrl: './eliminar-materias.component.html',
  styleUrls: ['./eliminar-materias.component.css']
})
export class EliminarMateriasComponent {
  materiaId: string = '';
  constructor(private materiaService: MateriasService, private router: Router, private activatedRoute: ActivatedRoute) { }
  ngOnInit(): void {
    this.activatedRoute.params.subscribe(data => {
      this.materiaId = data['id']
    })

    if (this.materiaId) {
      this.materiaService.eliminarMateria(this.materiaId).subscribe(data => {
        this.router.navigate(['/materias/lista'])

      },err => {
        console.log(err);
      })

    }
  }
}
