import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CompetenciaService {

  ruta:string = 'http://localhost:8000/'
  constructor(private http:HttpClient) { }

  listarCompetencias(){
    return this.http.get(this.ruta + 'competencias');
  }
  listarCompetencia(idCompetencia:string){
    return this.http.get(this.ruta + 'competencias/'+ idCompetencia);
  }
  agregarCompetencia(competenciaObj:any){
    return this.http.post(this.ruta + 'competencias',competenciaObj);
  }

  actualizarCompetencia(idCompetencia:string ,competenciaObj:any){
    return this.http.put(this.ruta + 'competencias/'+ idCompetencia ,competenciaObj) ;
  }

  eliminarCompetencia(idCompetencia:string ){
    return this.http.delete(this.ruta + 'competencias/'+ idCompetencia ) ;
  }
}
