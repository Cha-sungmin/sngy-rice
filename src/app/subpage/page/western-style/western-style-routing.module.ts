import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WesternStylePage } from './western-style.page';

const routes: Routes = [
  {
    path: '',
    component: WesternStylePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WesternStylePageRoutingModule {}
