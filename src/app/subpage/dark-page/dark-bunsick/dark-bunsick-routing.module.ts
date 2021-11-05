import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DarkBunsickPage } from './dark-bunsick.page';

const routes: Routes = [
  {
    path: '',
    component: DarkBunsickPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DarkBunsickPageRoutingModule {}
