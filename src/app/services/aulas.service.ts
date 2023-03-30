import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AulasService {

  ruta:string = 'http://localhost:8000/'
  constructor(private http:HttpClient) { }

  listarAulas(){
    return this.http.get(this.ruta + 'aulas');
  }
  listarAula(idAula:string){
    return this.http.get(this.ruta + 'aulas/'+ idAula);
  }
  agregarAula(AulaObj:any){
    return this.http.post(this.ruta + 'aulas',AulaObj);
  }

  actualizarAula(idAula:string ,AulaObj:any){
    return this.http.put(this.ruta + 'aulas/'+ idAula ,AulaObj) ;
  }

  eliminarAula(idAula:string ){
    return this.http.delete(this.ruta + 'aulas/'+ idAula ) ;
  }
}
