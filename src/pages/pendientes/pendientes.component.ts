// Paso 2.1: Creamos la clase PendientesPage:
import { Component } from "@angular/core";
import { DeseosService } from "../../providers/deseos.service";
import { Lista } from "../../models";
import { NavController, AlertController } from "ionic-angular";
import { AgregarPage } from "../agregar/agregar.component";

@Component({
  selector: "page-pendientes",
  templateUrl: 'pendientes.component.html'
})

export class PendientesPage {
  // Paso 3.5: Creamos el constructor y le inyectamos el servicio 'DeseosService' que será
  // llamado al inicializarse el constructor:
  // Paso 8.11: Inyectamos un parámetro tipo 'NavController' para poder navegar entre
  // componentes:
  // Paso 9.1: Inyectamos un parámetro tipo 'AlertController' para poder utilizar las alertas:
  constructor(public _deseosService: DeseosService,
    private _navController: NavController,
    private _alertController: AlertController
  ) {

  }
  // Paso 4: Creamos el directorio 'src/models' y luego el archivo 'src/models/lista-item.model.ts'
  // para manejar el funcionamiento de los items en la lista de deseos:
  // Paso 4.1: Vamos al archivo 'lista-item.model.ts'
  // Paso 7.3: Creamos el método 'listaSeleccionada(lista)' del evento click:
  // listaSeleccionada(lista: Lista) {
    // Paso 12.1: Lanzamos el componente 'AgregarPage' cuando se hace click sobre una lista
    // y le mandamos las propiedades de la lista como parámetros:
    // this._navController.push(AgregarPage, {
      // titulo: lista.titulo,
      // lista: lista
    // });
    // Paso 12.2: Vamos al archivo agregar.component.ts
  // }
  // Paso 7.4: Vamos al archivo pendientes.component.html
  // Paso 12.10: Codificamos el método 'borrarLista()' para llamar al método
  // 'borrarLista()' del servicio '_deseosService':
  // borrarLista(lista: Lista) {
    // this._deseosService.borrarLista(lista);
  // }
  // Paso 13: Creamos el Pipe 'src/pipes/filtroCompletado' y luego borramos el archivo
  // 'src/pipes/pipes.module.ts':
  // Paso 13.1: Vamos al archivo app.module.ts:
  // Paso 8.10: Añadimos el método 'agregarLista()' para que nos dirija al componente 'Agregar':
  agregarLista() {
    // Paso 8.12: Agregamos la página 'AgregarPage' al stack de páginas:
    // this._navController.push(AgregarPage);
    // Paso 9.2: Pegamos y modificamos el código html de la 'Prompt Alert':
    const alerta = this._alertController.create({
      title: 'Nueva lista',
      message: "Nombre de la nueva lista que desea",
      inputs: [
        {
          name: 'titulo',
          placeholder: 'Nombre de la lista'
        },
      ],
      buttons: [
        {
          text: 'Cancelar'
        },
        {
          text: 'Agregar',
          // A la propiedad 'handler' se le asigna una función para manejar las entradas
          // del usuario definidas en el array 'inputs', siendo el parámetro los objetos
          // de entrada
          handler: datosUsuario => {
            //console.log(datosUsuario.titulo);
            // Paso 9.3: Si el usuario añade algún texto, lanzamos el componente 'AgregarPage'
            // y le enviamos el texto introducido por el usuario:
            if (datosUsuario.titulo.length === 0) {
              return;
            } else {
              this._navController.push(AgregarPage, { titulo: datosUsuario.titulo });
            }
            // Paso 9.4: Vamos al archivo agregar.component.ts
          }
        }
      ]
    });

    alerta.present();
  }
  // Paso 8.13: Vamos al archivo agregar.component.html
}

// Paso 2.2: Vamos al archivo src/app/app.module.ts
