import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DarkWestenStylePage } from './dark-westen-style.page';

const routes: Routes = [
  {
    path: '',
    component: DarkWestenStylePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DarkWestenStylePageRoutingModule {}
