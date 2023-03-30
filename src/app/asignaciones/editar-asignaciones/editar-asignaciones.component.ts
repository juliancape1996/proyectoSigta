import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AsignacionService } from 'src/app/services/asignacion.service';
import { AulasService } from 'src/app/services/aulas.service';
import { CompetenciaService } from 'src/app/services/competencia.service';
import { EstudianteService } from 'src/app/services/estudiante.service';
import { MateriasService } from 'src/app/services/materias.service';
import { ProfesorService } from 'src/app/services/profesor.service';

@Component({
  selector: 'app-editar-asignaciones',
  templateUrl: './editar-asignaciones.component.html',
  styleUrls: ['./editar-asignaciones.component.css']
})
export class EditarAsignacionesComponent {
  editarAsignacionForm: FormGroup = new FormGroup({});
  asignacionId: string = '';
  asignacionDetalle: any;
  dataLoaded: boolean = false;
  listaEstudiante:any;
  listaProfesor:any;
  listaAula:any;
  listaCompetencia:any;
  listaMateria:any;

  constructor(private router: Router,
    private activatedRoute: ActivatedRoute,
    private asignacionService:AsignacionService,
    private estudianteService:EstudianteService,
    private profesorService:ProfesorService,
    private aulaService:AulasService,
    private competenciaService:CompetenciaService,
    private materiaService:MateriasService,
   private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.dataLoaded = false;
    this.listarEstudiante();
    this.listarProfesor();
    this.listarAula();
    this.listarCompetencia();
    this.listarMateria();


    this.activatedRoute.params.subscribe(data => {
      this.asignacionId = data['id']
    })

    if (this.asignacionId !== '') {
      this.asignacionService.listarAsignacion(this.asignacionId)
        .toPromise()
        .then(data => {
          this.asignacionDetalle = data;
          // Object.assign(this.estudianteDetalle, data);
          console.log(this.asignacionDetalle);



          //Rellenar el formulario
          this.editarAsignacionForm = this.formBuilder.group({
            "id_profesor": new FormControl(this.asignacionDetalle.id_profesor,Validators.required),
            "id_estudiante": new FormControl(this.asignacionDetalle.id_estudiante,Validators.required),
            "id_aula": new FormControl(this.asignacionDetalle.id_aula,Validators.required),
            "id_competencia": new FormControl(this.asignacionDetalle.id_competencia,Validators.required),
            "id_materia": new FormControl(this.asignacionDetalle.id_materia,Validators.required),
            "horario": new FormControl(this.asignacionDetalle.horario,Validators.required),
            "completado": new FormControl(this.asignacionDetalle.completado,Validators.required),

          })

          //cargamos la pagina para que pueda mostrar todos los datos correctamente
          this.dataLoaded = true;

        })
        .catch(err => {
          console.log(err);

        })
    }
  }
  actualizarAsignacion() {
     this.asignacionService.actualizarAsignacion(this.asignacionId, this.editarAsignacionForm.value).subscribe(data =>{
       this.router.navigate(['/aulas/lista'])
     }, err =>{
      console.log(err);
      
     })
   }



   // Funciones para traer los datos de las tablas relacionadas

  listarEstudiante(){
    this.estudianteService.listarEstudiantes().subscribe(data=>{
    this.listaEstudiante=data;
    })
  }

  listarProfesor(){
    this.profesorService.listarProfesores().subscribe(data=>{
      this.listaProfesor= data;
    })
  }
  listarAula(){
    this. aulaService.listarAulas().subscribe(data =>{
      this.listaAula = data;
    })
  }

  listarCompetencia(){
    this.competenciaService.listarCompetencias().subscribe(data =>{
      this.listaCompetencia = data;
    })
  }

  listarMateria(){
    this.materiaService.listarMaterias().subscribe(data =>{
      this.listaMateria =data;
    })
  }

}
