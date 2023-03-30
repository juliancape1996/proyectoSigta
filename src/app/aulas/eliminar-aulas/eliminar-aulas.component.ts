import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AulasService } from 'src/app/services/aulas.service';

@Component({
  selector: 'app-eliminar-aulas',
  templateUrl: './eliminar-aulas.component.html',
  styleUrls: ['./eliminar-aulas.component.css']
})
export class EliminarAulasComponent {
  aulaId: string = '';
  constructor(private aulaService: AulasService, private router: Router, private activatedRoute: ActivatedRoute) { }
  ngOnInit(): void {
    this.activatedRoute.params.subscribe(data => {
      this.aulaId = data['id']
    })

    if (this.aulaId) {
      this.aulaService.eliminarAula(this.aulaId).subscribe(data => {
        this.router.navigate(['/aulas/lista'])

      },err => {
        console.log(err);
      })

    }
  }
}
