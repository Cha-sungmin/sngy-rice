import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DarkHansickPage } from './dark-hansick.page';

const routes: Routes = [
  {
    path: '',
    component: DarkHansickPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DarkHansickPageRoutingModule {}
