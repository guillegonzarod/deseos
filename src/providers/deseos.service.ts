import { Injectable } from "@angular/core";
import { Lista } from "../models";

// Paso 3.2: Añadimos el decorador '@Injectable()', ya que es un servicio:
@Injectable()
// Paso 3.1: Creamos la clase 'DeseosService':
export class DeseosService {
  // Paso 6.1: Declaramos e inicializamos un array del tipo 'Lista' para manejar todas las
  // listas desde el servicio
  private listas: Lista[] = [];
  // Paso 3.3.: Creamos el constructor:
  constructor() {
    // Paso 6.2: Declaramos e inicializamos 2 listas de ejemplo como constantes:
    // const lista1 = new Lista('Recolectar piedras del infinito');
    // const lista2 = new Lista('Héroes a vencer');

    // Paso 6.3: Añadimos la 'lista1' y 'lista2' a la propiedad 'listas':
    // this.listas.push(lista1, lista2);

    // console.log(this.listas);

    // 11.4: Cuando se instancia el servicio, cargamos los datos desde el
    // Local Storage
    this.cargarStorage();
    // Paso 12.1: Vamos al archivo pendientes.component.ts
  }
  // Paso 3.4: Vamos al archivo 'src/app/app.module.ts'
  // Paso 7: Vamos a la URL 'https://ionicframework.com/docs/components/#lists', copiamos el
  // código html de la 'Basic List'
  // Paso 7.1: Vamos al archivo pendientes.component.html
  // Paso 12.9: Codificamos el método de 'borrarLista()' para devolver la propiedad 'listas'
  // filtrada. Luego lo guardamos en el Local Storage:
  borrarLista(lista: Lista) {
    this.listas = this.listas.filter(datos => {
      return datos.id !== lista.id;
    });
    this.guardarStorage();
    // Paso 12.10: Vamos al archivo pendientes.component.ts
  }

  // Paso 11.1: Codificamos el método 'agregarLista()' para agregar listas a la propiedad
  // tipo Lista[]:
  agregarLista(lista: Lista) {
    this.listas.push(lista);
    // Paso 11.3: Guardamos las listas en el Local Storage:
    this.guardarStorage();
  }

  // Paso 11.2: Codificamos los métodos 'guardarStorage()' y 'cargarStorage()':
  guardarStorage() {
    localStorage.setItem('datos', JSON.stringify(this.listas));
  }

  cargarStorage() {
    if (localStorage.getItem('datos')) {
      this.listas = JSON.parse(localStorage.getItem('datos'));
    } else {
      this.listas = [];
    }
  }

  // Paso 11.3: Vamos al archivo agregar.component.ts
}
