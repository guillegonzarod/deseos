// Paso 2.7: Creamos la clase TerminadosPage:

import  { Component } from "@angular/core";
import { DeseosService } from "../../providers/deseos.service";

@Component({
  selector: "page-terminados",
  templateUrl: 'terminados.component.html'
})

export class TerminadosPage {
// Paso 7.11: Creamos el constructor y le inyectamos el servicio 'DeseosService' que será
// llamado al inicializarse el constructor:
constructor(public _deseosService: DeseosService){

}
// Paso 8: Creamos el directorio 'src/pages/agregar' y luego los archivos
// 'src/pages/agregar/agregar.component.html' y 'src/pages/agregar/agregar.component.ts'
// Paso 8.1: Vamos al archivo agregar.component.html
}

// Paso 2.8: Vamos al archivo src/app/app.module.ts
