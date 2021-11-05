import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SulPage } from './sul.page';

const routes: Routes = [
  {
    path: '',
    component: SulPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SulPageRoutingModule {}
