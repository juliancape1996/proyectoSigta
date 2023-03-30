import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProfesorService {
  
  ruta:string = 'http://localhost:8000/'
  constructor(private http:HttpClient) { }

  listarProfesores(){
    return this.http.get(this.ruta + 'profesor');
  }
  listarProfesore(idprofesor:string){
    return this.http.get(this.ruta + 'profesor/'+ idprofesor);
  }
  agregarProfesore(profesorObj:any){
    return this.http.post(this.ruta + 'profesor',profesorObj);
  }

  actualizarProfesore(idprofesor:string ,profesorObj:any){
    return this.http.put(this.ruta + 'profesor/'+ idprofesor ,profesorObj) ;
  }

  eliminarProfesore(idprofesor:string ){
    return this.http.delete(this.ruta + 'profesor/'+ idprofesor ) ;
  }
}
