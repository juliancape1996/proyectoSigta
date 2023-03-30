import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProfesorService } from 'src/app/services/profesor.service';


@Component({
  selector: 'app-agregar-profesor',
  templateUrl: './agregar-profesor.component.html',
  styleUrls: ['./agregar-profesor.component.css']
})
export class AgregarProfesorComponent {
  addProfesorForm:FormGroup= new FormGroup({});
  constructor(private profesorService:ProfesorService,private formBuilder:FormBuilder, private router:Router){}

  
  ngOnInit(): void {
    this.addProfesorForm=this.formBuilder.group({
      "nombre_profesor": new FormControl('',[Validators.required,Validators.minLength(3)]),
      "correo_electronico": new FormControl('',[Validators.required,Validators.email]),
      "telefono": new FormControl('',[Validators.required,Validators.maxLength(10)]),
      "direccion": new FormControl(''),
    })  
  }

  crearEstudiante(){
    this.profesorService.agregarProfesore(this.addProfesorForm.value).subscribe(data=>{
      this.router.navigate(['/profesores/lista'])
      console.log(this.addProfesorForm);
      
      
    },err=>{
      console.log(err);
      
    })
  }
}
