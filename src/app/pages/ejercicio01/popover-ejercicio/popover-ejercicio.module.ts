import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PopoverEjercicioPageRoutingModule } from './popover-ejercicio-routing.module';

import { PopoverEjercicioPage } from './popover-ejercicio.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PopoverEjercicioPageRoutingModule
  ],
  declarations: [PopoverEjercicioPage]
})
export class PopoverEjercicioPageModule {}
