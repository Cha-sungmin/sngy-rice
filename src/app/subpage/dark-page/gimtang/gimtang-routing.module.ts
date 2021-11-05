import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GimtangPage } from './gimtang.page';

const routes: Routes = [
  {
    path: '',
    component: GimtangPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GimtangPageRoutingModule {}
