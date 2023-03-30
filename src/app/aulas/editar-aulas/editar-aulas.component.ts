import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AulasService } from 'src/app/services/aulas.service';

@Component({
  selector: 'app-editar-aulas',
  templateUrl: './editar-aulas.component.html',
  styleUrls: ['./editar-aulas.component.css']
})
export class EditarAulasComponent {
  editarAulaeForm: FormGroup = new FormGroup({});
  aulaId: string = '';
  aulaDetalle: any;
  dataLoaded: boolean = false;

  constructor(private router: Router, private aulaService: AulasService, private activatedRoute: ActivatedRoute
    , private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.dataLoaded = false;


    this.activatedRoute.params.subscribe(data => {
      this.aulaId = data['id']
    })

    if (this.aulaId !== '') {
      this.aulaService.listarAula(this.aulaId)
        .toPromise()
        .then(data => {
          this.aulaDetalle = data;
          // Object.assign(this.estudianteDetalle, data);
          console.log(this.aulaDetalle);



          //Rellenar el formulario
          this.editarAulaeForm = this.formBuilder.group({
            "numero_de_aula": new FormControl(this.aulaDetalle.numero_de_aula,[Validators.required,Validators.maxLength(10)]),
            "capacidad": new FormControl(this.aulaDetalle.capacidad,Validators.required),
            "ubicacion": new FormControl(this.aulaDetalle.ubicacion,Validators.required),

          })

          //cargamos la pagina para que pueda mostrar todos los datos correctamente
          this.dataLoaded = true;

        })
        .catch(err => {
          console.log(err);

        })
    }
  }
  actualizarAula() {
     this.aulaService.actualizarAula(this.aulaId, this.editarAulaeForm.value).subscribe(data =>{
       this.router.navigate(['/aulas/lista'])
     }, err =>{
      console.log(err);
      
     })
   }
}
