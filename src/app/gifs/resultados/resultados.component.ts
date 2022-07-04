import { Component } from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html',
  styles: [
  ]
})
export class ResultadosComponent {

  get resultados (){ //getting the results from the service 
    return this.gifsService.resultado;
  }

  constructor( private gifsService : GifsService) { }

}
