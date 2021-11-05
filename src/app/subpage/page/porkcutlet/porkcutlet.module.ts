import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PorkcutletPageRoutingModule } from './porkcutlet-routing.module';

import { PorkcutletPage } from './porkcutlet.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PorkcutletPageRoutingModule
  ],
  declarations: [PorkcutletPage]
})
export class PorkcutletPageModule {}
