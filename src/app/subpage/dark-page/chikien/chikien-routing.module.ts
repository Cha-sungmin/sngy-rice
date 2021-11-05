import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChikienPage } from './chikien.page';

const routes: Routes = [
  {
    path: '',
    component: ChikienPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChikienPageRoutingModule {}
