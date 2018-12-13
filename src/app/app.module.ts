import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

// Components
import { ListasComponent } from '../components/listas.component';

// Pages
import { TabsPage } from '../pages/tabs/tabs';
import { PendientesPage } from '../pages/pendientes/pendientes.component';
import { TerminadosPage } from '../pages/terminados/terminados.component';
import { AgregarPage } from '../pages/agregar/agregar.component';

// Pipes
import { FiltroCompletadoPipe } from '../pipes/filtro-completado/filtro-completado';

// Providers
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { DeseosService } from '../providers/deseos.service';

// Paso 2.2: Declaramos la clase 'PendientesPage':
// Paso 2.8: Declaramos la clase 'TerminadosPage':
// Paso 8.4: Declaramos la clase 'AgregarPage':
// Paso 13.1: Declaramos la clase 'FiltroCompletadoPipe':
// Paso 14.2: Declaramos la clase 'ListasComponent':
@NgModule({
  declarations: [
    MyApp,
    TabsPage,
    PendientesPage,
    TerminadosPage,
    AgregarPage,
    FiltroCompletadoPipe,
    // Paso 13.2: Vamos al archivo filtro-completado.ts
    ListasComponent
    // Paso 14.3: Vamos al archivo listas.component.html
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  // Paso 2.3: Añadimos la clase 'PendientesPage' al objeto 'entryComponents' para que
  //angular pueda renderizar el componente cuando sea necesario:
  // Paso 2.9: Añadimos la clase 'TerminadosPage' al objeto 'entryComponents' para que
  //angular pueda renderizar el componente cuando sea necesario:
  // Paso 8.5: Añadimos la clase 'AgregarPage' al objeto 'entryComponents' para que
  //angular pueda renderizar el componente cuando sea necesario:
  entryComponents: [
    MyApp,
    TabsPage,
    PendientesPage,
    // Paso 2.4: Vamos al archivo pendientes.component.html
    TerminadosPage,
    // Paso 2.10: Vamos al archivo terminados.component.html
    AgregarPage
    // Paso 8.6: Vamos al archivo pendientes.component.html
  ],
  providers: [
    StatusBar,
    SplashScreen,
    // Paso 3.4: Añadimos el provider 'DeseosService'
    DeseosService,
    // Paso 3.5: Vamos al archivo 'pendientes.component.ts'
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
