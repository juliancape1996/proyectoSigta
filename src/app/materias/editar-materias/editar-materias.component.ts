import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MateriasService } from 'src/app/services/materias.service';

@Component({
  selector: 'app-editar-materias',
  templateUrl: './editar-materias.component.html',
  styleUrls: ['./editar-materias.component.css']
})
export class EditarMateriasComponent {
  editarMateriaForm: FormGroup = new FormGroup({});
  materiaId: string = '';
  materiaDetalle: any;
  dataLoaded: boolean = false;

  constructor(private router: Router, private materiaService: MateriasService, private activatedRoute: ActivatedRoute
    , private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.dataLoaded = false;


    this.activatedRoute.params.subscribe(data => {
      this.materiaId = data['id']
    })

    if (this.materiaId !== '') {
      this.materiaService.listarMateria(this.materiaId)
        .toPromise()
        .then(data => {
          this.materiaDetalle = data;
          // Object.assign(this.estudianteDetalle, data);
          console.log(this.materiaDetalle);



          //Rellenar el formulario
          this.editarMateriaForm = this.formBuilder.group({
            "nombre_de_materia": new FormControl(this.materiaDetalle.nombre_de_materia,Validators.required),
            "descripcion": new FormControl(this.materiaDetalle.descripcion, Validators.required),

          })

          //cargamos la pagina para que pueda mostrar todos los datos correctamente
          this.dataLoaded = true;

        })
        .catch(err => {
          console.log(err);

        })
    }
  }
  actualizarMateria() {
     this.materiaService.actualizarMateria(this.materiaId, this.editarMateriaForm.value).subscribe(data =>{
       this.router.navigate(['/materias/lista'])
     }, err =>{
      console.log(err);
      
     })
   }
}
