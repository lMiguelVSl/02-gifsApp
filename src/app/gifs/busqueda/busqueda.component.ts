import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styles: [
  ]
})
export class BusquedaComponent {

  //le asignamos el tipo especifico (input) ya que element es de tipo generico 
  @ViewChild('txtBuscar') txtBuscar !: ElementRef<HTMLInputElement>; //referencia a un objeto txt por su clase y con ! usamos el non-null operator 
  
  constructor( private gifsService : GifsService) { }
  buscar(){

    const valor = this.txtBuscar.nativeElement.value; //guardamos el valor del txtBucar 

    if (valor.trim().length === 0 ) {
      return;
    }

    this.gifsService.buscarGifs(valor); //utilizamos el metodo del servicio ya que esta inyectado

    this.txtBuscar.nativeElement.value = ''; //dejamos en blanco el input luego de oprimir enter 

  }
}
