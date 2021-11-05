import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SulPageRoutingModule } from './sul-routing.module';

import { SulPage } from './sul.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SulPageRoutingModule
  ],
  declarations: [SulPage]
})
export class SulPageModule {}
