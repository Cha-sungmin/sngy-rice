import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DarkWestenStylePageRoutingModule } from './dark-westen-style-routing.module';

import { DarkWestenStylePage } from './dark-westen-style.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DarkWestenStylePageRoutingModule
  ],
  declarations: [DarkWestenStylePage]
})
export class DarkWestenStylePageModule {}
