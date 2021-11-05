import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GimtangPageRoutingModule } from './gimtang-routing.module';

import { GimtangPage } from './gimtang.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GimtangPageRoutingModule
  ],
  declarations: [GimtangPage]
})
export class GimtangPageModule {}
