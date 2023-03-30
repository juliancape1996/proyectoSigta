import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CompetenciaService } from 'src/app/services/competencia.service';

@Component({
  selector: 'app-agregar-competencias',
  templateUrl: './agregar-competencias.component.html',
  styleUrls: ['./agregar-competencias.component.css']
})
export class AgregarCompetenciasComponent {
  addCompetenciaForm:FormGroup= new FormGroup({});
  constructor(private competenciaService:CompetenciaService,private formBuilder:FormBuilder, private router:Router){}

  
  ngOnInit(): void {
    this.addCompetenciaForm=this.formBuilder.group({
      "nombre_de_competencia": new FormControl('' , Validators.required),
      "descripcion": new FormControl('',Validators.required),
    })


    
  }

  crearCompetencia(){
    this.competenciaService.agregarCompetencia(this.addCompetenciaForm.value).subscribe(data=>{
      this.router.navigate(['/competencias/lista'])
      
    },err=>{
      console.log(err);
      
    })
  }
}
