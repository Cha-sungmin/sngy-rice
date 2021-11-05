import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HansickPage } from './hansick.page';

const routes: Routes = [
  {
    path: '',
    component: HansickPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HansickPageRoutingModule {}
