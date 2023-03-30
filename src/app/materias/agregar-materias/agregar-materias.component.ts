import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MateriasService } from 'src/app/services/materias.service';

@Component({
  selector: 'app-agregar-materias',
  templateUrl: './agregar-materias.component.html',
  styleUrls: ['./agregar-materias.component.css']
})
export class AgregarMateriasComponent {
  addMateriaForm:FormGroup= new FormGroup({});
  constructor(private materiaSerivice:MateriasService,private formBuilder:FormBuilder, private router:Router){}

  
  ngOnInit(): void {
    this.addMateriaForm=this.formBuilder.group({
      "nombre_de_materia": new FormControl('', Validators.required),
      "descripcion": new FormControl('',Validators.required),
    })


    
  }

  crearMateria(){
    this.materiaSerivice.agregarMateria(this.addMateriaForm.value).subscribe(data=>{
      this.router.navigate(['/materias/lista'])
      
    },err=>{
      console.log(err);
      
    })
  }
}
