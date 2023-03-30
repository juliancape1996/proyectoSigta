import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AsignacionService } from 'src/app/services/asignacion.service';

@Component({
  selector: 'app-eliminar-asignaciones',
  templateUrl: './eliminar-asignaciones.component.html',
  styleUrls: ['./eliminar-asignaciones.component.css']
})
export class EliminarAsignacionesComponent {
  asignacionId: string = '';
  ob=null
  constructor(private asignacionService: AsignacionService, private router: Router, private activatedRoute: ActivatedRoute) { }
  ngOnInit(): void {
    this.activatedRoute.params.subscribe(data => {
      this.asignacionId = data['id']
    })

    if (this.asignacionId) {
      this.asignacionService.eliminarAsignacion(this.asignacionId,this.ob).subscribe(data => {
        this.router.navigate(['/asignaciones/lista'])

      },err => {
        console.log(err);
      })

    }
  }
}
