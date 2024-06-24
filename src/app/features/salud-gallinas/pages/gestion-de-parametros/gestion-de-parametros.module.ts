import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../../../shared/shared.module';


import { GestionDeParametrosRoutingModule } from './gestion-de-parametros-routing.module';
import { HistorialYEstadisticasComponent } from './historial-y-estadisticas/historial-y-estadisticas.component';
import { FormularioGallinaComponent } from './formulario-gallina/formulario-gallina.component';


@NgModule({
  declarations: [
    HistorialYEstadisticasComponent,
    FormularioGallinaComponent
  ],
  imports: [
    SharedModule,
    CommonModule,
    GestionDeParametrosRoutingModule
  ]
})
export class GestionDeParametrosModule { }
