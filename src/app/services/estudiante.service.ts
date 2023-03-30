import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class EstudianteService {

  ruta:string = 'http://localhost:8000/'
  constructor(private http:HttpClient) { }

  listarEstudiantes(){
    return this.http.get(this.ruta + 'estudiantes');
  }
  listarEstudiante(idEstudiante:string){
    return this.http.get(this.ruta + 'estudiantes/'+ idEstudiante);
  }
  agregarEstudiante(estudianteObj:any){
    return this.http.post(this.ruta + 'estudiantes',estudianteObj);
  }

  actualizarEstudiante(idEstudiante:string ,estudianteObj:any){
    return this.http.put(this.ruta + 'estudiantes/'+ idEstudiante ,estudianteObj) ;
  }

  eliminarEstudiante(idEstudiante:string ){
    return this.http.delete(this.ruta + 'estudiantes/'+ idEstudiante ) ;
  }
}
