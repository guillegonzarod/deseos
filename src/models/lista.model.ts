import { ListaItem } from "./lista-item.model";

// Paso 5.1: Creamos la clase 'Lista' para crear la lista:
export class Lista {
  // Paso 5.2: Declaramos las propiedades de la lista:
  public id: number;
  public titulo: string;
  public creadaEn: Date;
  public terminadaEn: Date;
  public terminada: boolean;
  public items: ListaItem[];

  // Paso 5.3: Declaramos el constructor para inicializar las propiedades:
  constructor(titulo: string) {
    this.titulo = titulo;
    this.terminada = false;
    this.creadaEn = new Date();
    this.items = [];
    this.id = new Date().getTime();
  }

// Paso 5.4: Creamos el archivo 'src/models/index.ts' para indexar los modelos y poder
// importarlos, de una manera mas sencilla, en otras clases:
// Paso 5.5: Vamos al archivo index.ts
}
