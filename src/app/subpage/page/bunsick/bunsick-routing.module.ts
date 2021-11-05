import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BunsickPage } from './bunsick.page';

const routes: Routes = [
  {
    path: '',
    component: BunsickPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BunsickPageRoutingModule {}
