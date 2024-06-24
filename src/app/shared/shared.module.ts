import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { MenuLateralComponent } from './components/molecules/menu-lateral/menu-lateral.component';
import { FlechaDespliegueComponent } from './components/atoms/flecha-despliegue/flecha-despliegue.component';
import { ButtonDismissComponent } from './components/atoms/button-dismiss/button-dismiss.component';
import { TablaSeleccionarComponent } from './components/molecules/tabla-seleccionar/tabla-seleccionar.component';
import { TablaGallinasComponent } from './components/molecules/tabla-gallinas/tabla-gallinas.component';
import { AlertComponent } from './components/organisms/alert/alert.component';
import { AlertFormComponent } from './components/organisms/alert-form/alert-form.component';
import { FormGallinaComponent } from './components/molecules/form-gallina/form-gallina.component';

@NgModule({
  declarations: [
    MenuLateralComponent,
    FlechaDespliegueComponent,
    ButtonDismissComponent,
    TablaSeleccionarComponent,
    TablaGallinasComponent,
    AlertComponent,
    AlertFormComponent,
    FormGallinaComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    MenuLateralComponent,
    FlechaDespliegueComponent,
    ButtonDismissComponent,
    TablaSeleccionarComponent,
    TablaGallinasComponent,
    AlertComponent,
    AlertFormComponent,
    FormGallinaComponent,
  ]
})
export class SharedModule { }
