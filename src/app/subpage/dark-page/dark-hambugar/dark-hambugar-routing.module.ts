import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DarkHambugarPage } from './dark-hambugar.page';

const routes: Routes = [
  {
    path: '',
    component: DarkHambugarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DarkHambugarPageRoutingModule {}
