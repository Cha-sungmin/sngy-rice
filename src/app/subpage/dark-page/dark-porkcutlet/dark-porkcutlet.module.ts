import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DarkPorkcutletPageRoutingModule } from './dark-porkcutlet-routing.module';

import { DarkPorkcutletPage } from './dark-porkcutlet.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DarkPorkcutletPageRoutingModule
  ],
  declarations: [DarkPorkcutletPage]
})
export class DarkPorkcutletPageModule {}
