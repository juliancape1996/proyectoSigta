import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { EstudianteService } from 'src/app/services/estudiante.service';

@Component({
  selector: 'app-editar-estudiante',
  templateUrl: './editar-estudiante.component.html',
  styleUrls: ['./editar-estudiante.component.css']
})
export class EditarEstudianteComponent {
  editarEstudianteForm: FormGroup = new FormGroup({});
  estudianteId: string = '';
  estudianteDetalle: any;
  dataLoaded: boolean = false;

  constructor(private router: Router, private estudianteSerivice: EstudianteService, private activatedRoute: ActivatedRoute
    , private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.dataLoaded = false;


    this.activatedRoute.params.subscribe(data => {
      this.estudianteId = data['id']
    })

    if (this.estudianteId !== '') {
      this.estudianteSerivice.listarEstudiante(this.estudianteId)
        .toPromise()
        .then(data => {
          this.estudianteDetalle = data;
          // Object.assign(this.estudianteDetalle, data);
          console.log(this.estudianteDetalle);



          //Rellenar el formulario
          this.editarEstudianteForm = this.formBuilder.group({
            "nombre_estudiante": new FormControl(this.estudianteDetalle.nombre_estudiante,Validators.required),
            "correo_electronico": new FormControl(this.estudianteDetalle.correo_electronico,[Validators.required,Validators.email]),
            "telefono": new FormControl(this.estudianteDetalle.telefono,[Validators.required,Validators.maxLength(10)]),
            "direccion": new FormControl(this.estudianteDetalle.direccion),
          })

          //cargamos la pagina para que pueda mostrar todos los datos correctamente
          this.dataLoaded = true;

        })
        .catch(err => {
          console.log(err);

        })
    }
  }
  actualizarEstudiante() {
     this.estudianteSerivice.actualizarEstudiante(this.estudianteId, this.editarEstudianteForm.value).subscribe(data =>{
       this.router.navigate(['/estudiantes/lista'])
     }, err =>{
      console.log(err);
      
     })
   }
}