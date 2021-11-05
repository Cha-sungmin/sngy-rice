import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DarkJapanesePage } from './dark-japanese.page';

const routes: Routes = [
  {
    path: '',
    component: DarkJapanesePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DarkJapanesePageRoutingModule {}
