import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PorkcutletPage } from './porkcutlet.page';

const routes: Routes = [
  {
    path: '',
    component: PorkcutletPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PorkcutletPageRoutingModule {}
