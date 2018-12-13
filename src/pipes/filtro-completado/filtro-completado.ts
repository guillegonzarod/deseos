import { Pipe, PipeTransform } from '@angular/core';
import { Lista } from '../../models';

// Paso 13.2: Vamos a crear un Pipe Impuro que filtrará las listas que se le pasen y mostrará las
// pendientes o las completadas:
@Pipe({
  name: 'FiltroCompletado',
  pure: false
})
export class FiltroCompletadoPipe implements PipeTransform {

  transform(listas: Lista[], completada: boolean) {
    return listas.filter( lista => {
      return lista.terminada === completada;
    });
  }
  // Paso 13.3: Vamos al archivo pendientes.component.html
}
