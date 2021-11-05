import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChinesPage } from './chines.page';

const routes: Routes = [
  {
    path: '',
    component: ChinesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChinesPageRoutingModule {}
