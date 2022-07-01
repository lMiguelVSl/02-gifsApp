import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styles: [
  ]
})
export class BusquedaComponent {

  //le asignamos el tipo especifico (input) ya que element es de tipo generico 
  @ViewChild('txtBuscar') txtBuscar !: ElementRef<HTMLInputElement>; //referencia a un objeto txt por su clase y con ! usamos el non-null operator 
  
  buscar(){

    const valor = this.txtBuscar.nativeElement.value; //guardamos el valor del txtBucar 

    console.log(valor);

    this.txtBuscar.nativeElement.value = ''; //dejamos en blanco el input luego de oprimir enter 

  }
}
