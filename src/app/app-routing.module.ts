import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HistorialYEstadisticasComponent } from '../app/features/salud-gallinas/pages/gestion-de-parametros/historial-y-estadisticas/historial-y-estadisticas.component';
import { FormularioGallinaComponent } from './features/salud-gallinas/pages/gestion-de-parametros/formulario-gallina/formulario-gallina.component';
const routes: Routes = [
  {
    path: 'gestion-de-parametros',
    loadChildren: () => import('./features/salud-gallinas/pages/gestion-de-parametros/gestion-de-parametros.module').then(m => m.GestionDeParametrosModule)
  },
  {
    path: 'Historial-y-Estadisticas',
    component: HistorialYEstadisticasComponent
  },
  {
    path: 'formulario-gallina',
    component: FormularioGallinaComponent
  }
  
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
