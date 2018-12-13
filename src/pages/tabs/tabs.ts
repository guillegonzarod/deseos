import { Component } from '@angular/core';
import { PendientesPage } from '../pendientes/pendientes.component';
import { TerminadosPage } from '../terminados/terminados.component';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  // Paso 2.6: Asignamos el valor 'PendientesPage' a la propiedad 'tab1Root' (si nos salta un
  // error, a veces basta con reiniciar el servidor ionic):
  tab1Root = PendientesPage;
  // Paso 2.11: Asignamos el valor 'TerminadosPage' a la propiedad 'tab2Root' (si nos salta un
  // error, a veces basta con reiniciar el servidor ionic):
  tab2Root = TerminadosPage;
  // Paso 2.7: Vamos al archivo terminados.component.ts
  // Paso 3: Creamos el directorio 'src/providers' (servicios) y luego el archivo
  // 'src/providers/deseos.service.ts'
  // Paso 3.1: Vamos al archivo deseos.service.ts
  constructor() {

  }
}
