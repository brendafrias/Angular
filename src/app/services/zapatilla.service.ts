import {Injectable} from '@angular/core';
import {Zapatilla} from '../models/zapatilla';

@Injectable()
export class ZapatillaService{
    public zapatillas: Array<Zapatilla>;
    constructor(){
        this.zapatillas = [
            new Zapatilla("Nike Air Max", 180, "Nike", "Azul", true),
            new Zapatilla("Rebook Classic", 80, "Rebook", "Blanco", true),
            new Zapatilla("Nike runner", 60, "Nike", "BNegro", true),
            new Zapatilla("Adidas Classic", 50, "Adidas", "Red", false)
          ];
    }

    getTexto(){
        return "Hola mundo desde un servicio";
    }
    getZapatillas(): Array<Zapatilla>{
        return this.zapatillas;
    }
}