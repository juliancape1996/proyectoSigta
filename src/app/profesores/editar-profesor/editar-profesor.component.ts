import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { ProfesorService } from 'src/app/services/profesor.service';

@Component({
  selector: 'app-editar-profesor',
  templateUrl: './editar-profesor.component.html',
  styleUrls: ['./editar-profesor.component.css']
})
export class EditarProfesorComponent {
  editarProfesorForm: FormGroup = new FormGroup({});
  profesorId: string = '';
  profesorDetalle: any;
  dataLoaded: boolean = false;

  constructor(private router: Router, private profesorService: ProfesorService, private activatedRoute: ActivatedRoute
    , private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.dataLoaded = false;


    this.activatedRoute.params.subscribe(data => {
      this.profesorId = data['id']
    })

    if (this.profesorId !== '') {
      this.profesorService.listarProfesore(this.profesorId)
        .toPromise()
        .then(data => {
          this.profesorDetalle = data;
          // Object.assign(this.estudianteDetalle, data);
          console.log(this.profesorDetalle);



          //Rellenar el formulario
          this.editarProfesorForm = this.formBuilder.group({
            "nombre_profesor": new FormControl(this.profesorDetalle.nombre_profesor,[Validators.required,Validators.minLength(3)]),
            "correo_electronico": new FormControl(this.profesorDetalle.correo_electronico,[Validators.required,Validators.email]),
            "telefono": new FormControl(this.profesorDetalle.telefono,[Validators.required,Validators.maxLength(10)]),
            "direccion": new FormControl(this.profesorDetalle.direccion),
          })

          //cargamos la pagina para que pueda mostrar todos los datos correctamente
          this.dataLoaded = true;

        })
        .catch(err => {
          console.log(err);

        })
    }
  }
  actualizarProfesor() {
     this.profesorService.actualizarProfesore(this.profesorId, this.editarProfesorForm.value).subscribe(data =>{
       this.router.navigate(['/profesores/lista'])
     }, err =>{
      console.log(err);
      
     })
   }
}
