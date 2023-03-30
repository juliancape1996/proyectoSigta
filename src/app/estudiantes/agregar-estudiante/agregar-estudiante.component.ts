import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EstudianteService } from 'src/app/services/estudiante.service';

@Component({
  selector: 'app-agregar-estudiante',
  templateUrl: './agregar-estudiante.component.html',
  styleUrls: ['./agregar-estudiante.component.css']
})
export class AgregarEstudianteComponent {
  addEstudianteForm:FormGroup= new FormGroup({});
  constructor(private estudianteService:EstudianteService,private formBuilder:FormBuilder, private router:Router){}

  
  ngOnInit(): void {
    this.addEstudianteForm=this.formBuilder.group({
      "nombre_estudiante": new FormControl('',Validators.required),
      "correo_electronico": new FormControl('', [Validators.required,Validators.email]),
      "telefono": new FormControl('',[Validators.required,Validators.maxLength(10)]),
      "direccion": new FormControl(''),
    })


    
  }

  crearEstudiante(){
    this.estudianteService.agregarEstudiante(this.addEstudianteForm.value).subscribe(data=>{
      this.router.navigate(['/estudiantes/lista'])
      
    },err=>{
      console.log(err);
      
    })
  }

}
