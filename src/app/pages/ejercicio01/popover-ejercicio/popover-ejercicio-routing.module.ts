import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PopoverEjercicioPage } from './popover-ejercicio.page';

const routes: Routes = [
  {
    path: '',
    component: PopoverEjercicioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PopoverEjercicioPageRoutingModule {}
