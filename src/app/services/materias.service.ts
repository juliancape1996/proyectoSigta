import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MateriasService {

  ruta:string = 'http://localhost:8000/'
  constructor(private http:HttpClient) { }

  listarMaterias(){
    return this.http.get(this.ruta + 'materias');
  }
  listarMateria(idMateria:string){
    return this.http.get(this.ruta + 'materias/'+ idMateria);
  }
  agregarMateria(MateriaObj:any){
    return this.http.post(this.ruta + 'materias',MateriaObj);
  }

  actualizarMateria(idMateria:string ,MateriaObj:any){
    return this.http.put(this.ruta + 'materias/'+ idMateria ,MateriaObj) ;
  }

  eliminarMateria(idMateria:string ){
    return this.http.delete(this.ruta + 'materias/'+ idMateria ) ;
  }
}
