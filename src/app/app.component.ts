import { Component } from '@angular/core';
import { Configuracion } from './models/configuracion';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular';
  public mostrar_videojuegos: boolean = true;
  public descripcion: string;
  public config;


  constructor() {
    this.title = Configuracion.titulo;
    this.descripcion = Configuracion.descripcion;
    this.config = Configuracion;

  }

  ocultarVideojuegos(bool: boolean) {
    this.mostrar_videojuegos = bool;
  }
}
