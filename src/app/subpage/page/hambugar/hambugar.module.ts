import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HambugarPageRoutingModule } from './hambugar-routing.module';

import { HambugarPage } from './hambugar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HambugarPageRoutingModule
  ],
  declarations: [HambugarPage]
})
export class HambugarPageModule {}
