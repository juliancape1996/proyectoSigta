import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AsignacionService } from 'src/app/services/asignacion.service';
import { AulasService } from 'src/app/services/aulas.service';
import { CompetenciaService } from 'src/app/services/competencia.service';
import { EstudianteService } from 'src/app/services/estudiante.service';
import { MateriasService } from 'src/app/services/materias.service';
import { ProfesorService } from 'src/app/services/profesor.service';

@Component({
  selector: 'app-agregar-asignaciones',
  templateUrl: './agregar-asignaciones.component.html',
  styleUrls: ['./agregar-asignaciones.component.css']
})
export class AgregarAsignacionesComponent {
  listaEstudiante:any;
  listaProfesor:any;
  listaAula:any;
  listaCompetencia:any;
  listaMateria:any;
  dataLoaded: boolean = false;

  
  addAsignacionForm:FormGroup= new FormGroup({});
  constructor(private asignacionService:AsignacionService,
    private estudianteService:EstudianteService,
    private profesorService:ProfesorService,
    private aulaService:AulasService,
    private competenciaService:CompetenciaService,
    private materiaService:MateriasService,
    private formBuilder:FormBuilder, 
    private router:Router){}

  
  ngOnInit(): void {
    this.dataLoaded = false;
    this.listarEstudiante();
    this.listarProfesor();
    this.listarAula();
    this.listarCompetencia();
    this.listarMateria();

    this.addAsignacionForm=this.formBuilder.group({
      "id_profesor": new FormControl('',Validators.required),
      "id_estudiante": new FormControl('',Validators.required),
      "id_aula": new FormControl('',Validators.required),
      "id_competencia": new FormControl('',Validators.required),
      "id_materia": new FormControl('',Validators.required),
      "horario": new FormControl('',Validators.required),
      "completado": new FormControl('',Validators.required),
    })    
  }

  crearEstudiante(){
    this.asignacionService.agregarAsignacion(this.addAsignacionForm.value).subscribe(data=>{
      this.router.navigate(['/asignaciones/lista'])
      
    },err=>{
      console.log(err);
      
    })
    this.dataLoaded = true;   
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
