import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Gif, SearchGifsResponse } from '../interface/gifs.interface';

@Injectable({
  providedIn: 'root' //a nivel global de la aplicacion 
})
export class GifsService {
  
  private apiKey    : string = 'eUYOvSN1Y33k40ou9p4CD57IZ1FUeeJf' ; 
  private _historial: string[] = [];

  public resultado : Gif[] = []; 

  get historial(){
    return [...this._historial];
  }

  constructor( private http: HttpClient ){ //importamos para poder hacer las peticiones http

    if ( localStorage.getItem( 'Historial' ) ) {
      
      this._historial = JSON.parse( localStorage.getItem( 'Historial' )! ); //convertimos un objeto a un string y con ( ! ) le decimos que ignore que puede ser null 

    }
      
  } 

  buscarGifs( query : string ){  //recibimos el valor del input desde Busqueda.component
   
    query = query.trim().toLowerCase(); //convertir en minusculas 

    if(this._historial.includes(query)) { //si en el array existe el nombre 
      alert('This value already exists');
     }

    if (!this._historial.includes(query)) {
         this._historial.unshift(query); //guardar al inicio del array 
         this._historial.slice(0,10); 

         localStorage.setItem( 'Historial', JSON.stringify( this._historial ) );
    }

    //forma de subscribirnos a un servicio, especificando el tipo de dato recibido (resp:any) para poder llamar sus aributos 
    this.http.get<SearchGifsResponse>( `https://api.giphy.com/v1/gifs/search?limit=10&api_key=${ this.apiKey }&q=${ query }` ) //interpolacion para mandar el valor
    .subscribe( ( resp ) => {
      this.resultado = resp.data;
      console.log(resp.data);
    })
    
  }
}
