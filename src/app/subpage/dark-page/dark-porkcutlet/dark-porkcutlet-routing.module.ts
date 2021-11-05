import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DarkPorkcutletPage } from './dark-porkcutlet.page';

const routes: Routes = [
  {
    path: '',
    component: DarkPorkcutletPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DarkPorkcutletPageRoutingModule {}
