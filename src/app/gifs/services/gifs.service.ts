import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root' //a nivel global de la aplicacion 
})
export class GifsService {

  private _historial: string[] = [];

  get historial(){
    return [...this._historial];
  }

  buscarGifs( query : string){
   
    query = query.trim().toLowerCase();

    if(this._historial.includes(query)) {
      alert('This value already exists');
     }

    if (!this._historial.includes(query)) {
      this._historial.unshift(query);
      this._historial.slice(0,10);
    }


    
  }
}
