import { Routes } from '@angular/router';
import { DefaultComponent } from './default/default.component';
import { C1Component } from './Components/c1/c1.component';
import { C2Component } from './Components/c2/c2.component';

export const AppRoutes: Routes = [
  { path: '', component: DefaultComponent }, //specifico un percorso e il componente a cui assegno tale percorso
  { path: 'c1/:id', component: C1Component }, //specifico un percorso con anche un dato. Se non è presente il dato, il percorso non si attiva
  { path: 'c2', component: C2Component }
];