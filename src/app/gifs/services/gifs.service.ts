import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root' //a nivel global de la aplicacion 
})
export class GifsService {
  
  private apiKey    : string = 'eUYOvSN1Y33k40ou9p4CD57IZ1FUeeJf' ; 
  private _historial: string[] = [];

  get historial(){
    return [...this._historial];
  }

  constructor( private http: HttpClient ){} //importamos para poder hacer las peticiones http

  buscarGifs( query : string){
   
    query = query.trim().toLowerCase();

    if(this._historial.includes(query)) {
      alert('This value already exists');
     }

    if (!this._historial.includes(query)) {
         this._historial.unshift(query);
         this._historial.slice(0,10);
    }

    //forma de subscribirnos a un servicio, especificando el tipo de dato recibido para poder llamar sus aributos 
    this.http.get('https://api.giphy.com/v1/gifs/trending?limit=10&api_key=eUYOvSN1Y33k40ou9p4CD57IZ1FUeeJf&q=brazil')
    .subscribe((resp:any) => {
      console.log(resp.data);
    })
    
  }
}
