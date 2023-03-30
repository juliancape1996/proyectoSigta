import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AulasService } from 'src/app/services/aulas.service';

@Component({
  selector: 'app-agregar-aulas',
  templateUrl: './agregar-aulas.component.html',
  styleUrls: ['./agregar-aulas.component.css']
})
export class AgregarAulasComponent {
  addAulaForm:FormGroup= new FormGroup({});
  constructor(private aulaService:AulasService,private formBuilder:FormBuilder, private router:Router){}

  
  ngOnInit(): void {
    this.addAulaForm=this.formBuilder.group({
      "numero_de_aula": new FormControl('',[Validators.required]),
      "capacidad": new FormControl('',Validators.required),
      "ubicacion": new FormControl('',Validators.required),
    })


    
  }

  crearAula(){
    this.aulaService.agregarAula(this.addAulaForm.value).subscribe(data=>{
      this.router.navigate(['/aulas/lista'])
      
    },err=>{
      console.log(err);
      
    })
  }

}
