import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HambugarPage } from './hambugar.page';

const routes: Routes = [
  {
    path: '',
    component: HambugarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HambugarPageRoutingModule {}
