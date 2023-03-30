import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CompetenciaService } from 'src/app/services/competencia.service';

@Component({
  selector: 'app-editar-competencias',
  templateUrl: './editar-competencias.component.html',
  styleUrls: ['./editar-competencias.component.css']
})
export class EditarCompetenciasComponent {
  editarCompetenciaForm: FormGroup = new FormGroup({});
  competenciaId: string = '';
  competenciaDetalle: any;
  dataLoaded: boolean = false;

  constructor(private router: Router, private competenciaService: CompetenciaService, private activatedRoute: ActivatedRoute
    , private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.dataLoaded = false;


    this.activatedRoute.params.subscribe(data => {
      this.competenciaId = data['id']
    })

    if (this.competenciaId !== '') {
      this.competenciaService.listarCompetencia(this.competenciaId)
        .toPromise()
        .then(data => {
          this.competenciaDetalle = data;
          // Object.assign(this.estudianteDetalle, data);
          console.log(this.competenciaDetalle);



          //Rellenar el formulario
          this.editarCompetenciaForm = this.formBuilder.group({
            "nombre_de_competencia": new FormControl(this.competenciaDetalle.nombre_de_competencia,Validators.required),
            "descripcion": new FormControl(this.competenciaDetalle.descripcion,Validators.required),

          })

          //cargamos la pagina para que pueda mostrar todos los datos correctamente
          this.dataLoaded = true;

        })
        .catch(err => {
          console.log(err);

        })
    }
  }
  actualizarConpetencia() {
     this.competenciaService.actualizarCompetencia(this.competenciaId, this.editarCompetenciaForm.value).subscribe(data =>{
       this.router.navigate(['/competencias/lista'])
     }, err =>{
      console.log(err);
      
     })
   }
}
