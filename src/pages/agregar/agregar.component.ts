// Paso 8.2: Copiamos el contenido del archivo 'pendientes.component.ts', lo pegamos aquí y
// modificamos lo que corresponda:
import { Component } from "@angular/core";
import { DeseosService } from "../../providers/deseos.service";
import { Lista, ListaItem } from "../../models";
import { NavParams } from "ionic-angular";

@Component({
  selector: "page-agregar",
  templateUrl: 'agregar.component.html'
})

export class AgregarPage {
  // Paso 9.5: Añadimos una propiedad tipo 'Lista':
  lista: Lista;
  // Paso 10.1: Añadimos la propiedad 'nombreItem' para ir asignando los items a la lista:
  nombreItem: string = '';
  // Paso 10.2: Vamos al archivo agregar.component.html

  // Paso 8.3: Creamos el constructor y le inyectamos el servicio 'DeseosService' que será
  // llamado al inicializarse el constructor:
  // Paso 9.4: Inyectamos un parámetro tipo 'NavParams' para poder pasar parámetros
  // entre componentes:
  constructor(public _deseosService: DeseosService,
    private _navParams: NavParams
  ) {
    const TITULO = this._navParams.get('titulo');
    // Paso 12.2: En caso de que en los parámetros venga la lista cargamos dicha lista, ya
    // que quiere decir que viene del click sobre la lista y no del botón de añadir lista. En
    // caso contrario creamos la lista:
    if (this._navParams.get('lista')) {
      this.lista = this._navParams.get('lista');
    } else {
      this.lista = new Lista(TITULO);
      // Paso 9.6: Vamos al archivo agregar.component.html
      // 11.3: Agregamos la lista al array de listas:
      this._deseosService.agregarLista(this.lista);
      // 11.4: Vamos al archivo deseos.service.ts
    }
  }
  // Paso 8.4: Vamos al archivo src/app/app.module.ts
  // Paso 10.3: Codificamos el método 'agregarItem()':
  agregarItem() {
    //console.log(this.nombreItem);
    if (this.nombreItem.length === 0) {
      return;
    }
    const nuevoItem = new ListaItem(this.nombreItem);
    this.lista.items.push(nuevoItem);
    // Paso 12.3: Guardamos los items de lista cada vez que se agreguen:
    this._deseosService.guardarStorage();
    this.nombreItem = '';
  }
  // Paso 10.4: Vamos al archivo agregar.component.html

  // Paso 10.6: Codificamos el método 'actualizarTarea()':
  actualizarTarea(item: ListaItem) {
    item.completado = !item.completado;
    // Paso 12.6: Comprobamos cuántos items de la lista están 'pendientes' y se los asignamos
    // a un nuevo array 'pendientes'. Luego comprobamos cuando están todos 'terminados':
    const PENDIENTES = this.lista.items.filter(datosFiltrados => {
      return !datosFiltrados.completado;
    }).length;

    if (PENDIENTES === 0) {
      this.lista.terminada = true;
      this.lista.terminadaEn = new Date();
    } else {
      this.lista.terminada = false;
      this.lista.terminadaEn = null;
    }
    // Paso 12.7: Vamos al archivo pendientes.component.html

    // Paso 12.4: Guardamos los items de lista cada vez que se actualicen:
    this._deseosService.guardarStorage();
  }
  // Paso 10.7: Vamos al archivo agregar.component.html
  // Paso 10.10: Codificamos el método 'borrar()':
  borrar(indiceItem: number) {
    this.lista.items.splice(indiceItem, 1);
    // Paso 12.5: Guardamos los items de lista cada vez que se borren:
    this._deseosService.guardarStorage();
  }
  // Paso 11.1: Vamos al archivo deseos.service.ts
}
