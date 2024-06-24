import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormularioGallinaComponent } from "./formulario-gallina/formulario-gallina.component";
import { HistorialYEstadisticasComponent } from './historial-y-estadisticas/historial-y-estadisticas.component';

const routes: Routes = [
  { path: 'Historial-y-Estadisticas', component: HistorialYEstadisticasComponent},
  { path: 'formulario-gallina', component: FormularioGallinaComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GestionDeParametrosRoutingModule { }
