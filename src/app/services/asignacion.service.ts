import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AsignacionService {

  ruta:string = 'http://localhost:8000/'
  constructor(private http:HttpClient) { }

  listarAsignaciones(){
    return this.http.get(this.ruta + 'asignaciones');
  }
  listarAsignacion(idAsignacion:string){
    return this.http.get(this.ruta + 'asignaciones/'+ idAsignacion);
  }
  agregarAsignacion(AsignacionObj:any){
    return this.http.post(this.ruta + 'asignaciones',AsignacionObj);
  }

  actualizarAsignacion(idAsignacion:string ,AsignacionObj:any){
    return this.http.put(this.ruta + 'asignaciones/'+ idAsignacion ,AsignacionObj) ;
  }

  eliminarAsignacion(idAsignacion:string, ob:null ){
    return this.http.patch(this.ruta + 'asignaciones/'+ idAsignacion,ob ) ;
  }
}
