// Paso 14.1: Añadimos el esqueleto básico del componente y le inyectamos el servicio
// '_deseosService' al constructor:
import { Component, Input } from '@angular/core';
import { DeseosService } from '../providers/deseos.service';
import { Lista } from '../models';
import { AgregarPage } from '../pages/agregar/agregar.component';
import { NavController, AlertController, ItemSliding } from 'ionic-angular';

@Component({
  selector: 'app-listas',
  templateUrl: 'listas.component.html'
})
export class ListasComponent {
  // Paso 14.7: Añadimos un 'input' para pasarle al componente si la lista es pendiente o
  // completada:
  @Input() terminada: boolean = false;
  // Paso 14.8: Vamos al archivo listas.component.html
  // Paso 15.1: Inyectamos un parámetro tipo 'AlertController' para poder editar el título
  // de una lista desde un botón al hacer 'slide':
  constructor(public _deseosService: DeseosService,
    private _navController: NavController,
    private _alertController: AlertController
  ) {

  }
  // Paso 14.5: Copiamos los métodos 'listaSeleccionada()' y 'borrarLista()' del
  // archivo 'pendientes.component.ts' y los pegamos aquí:
  listaSeleccionada(lista: Lista) {

    this._navController.push(AgregarPage, {
      titulo: lista.titulo,
      lista: lista
    });

  }

  borrarLista(lista: Lista) {
    this._deseosService.borrarLista(lista);
  }
  // Paso 14.6: Vamos al archivo terminados.component.html

  // Paso 15.2: Codificamos el método 'editarLista()':
  // Paso 15.7: Le añadimos a la función 'editarLista()' el parámetro 'slidingItem':
  editarLista(lista: Lista, slidingItem: ItemSliding) {
    // Paso 15.3: Copiamos el contenido de la función 'agregarLista()' del archivo
    // 'pendientes.component.ts', lo pegamos aquí y lo modificamos para adecuarlo
    // a la función de edición del nombre de la lista:
    // Paso 15.8: Cerramos el '<ion-item-sliding>' una vez lanzada la alerta:
    //FINAL DE LA APLICACIÓN
    slidingItem.close();

    const alerta = this._alertController.create({
      title: 'Editar lista',
      message: "Editar el nombre de la lista",
      inputs: [
        {
          name: 'titulo',
          placeholder: 'Nombre de la lista',
          value: lista.titulo
        },
      ],
      buttons: [
        {
          text: 'Cancelar'
        },
        {
          text: 'Guardar',
          handler: datosUsuario => {
            if (datosUsuario.titulo.length === 0) {
              return;
            } else {
              lista.titulo = datosUsuario.titulo;
              this._deseosService.guardarStorage();
            }
          }
        }
      ]
    });
    alerta.present();
  }
  // Paso 15.4: Vamos al archivo listas.component.html

}
// Paso 14.2: Vamos al archivo app.module.ts
