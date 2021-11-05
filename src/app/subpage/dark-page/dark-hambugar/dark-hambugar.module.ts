import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DarkHambugarPageRoutingModule } from './dark-hambugar-routing.module';

import { DarkHambugarPage } from './dark-hambugar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DarkHambugarPageRoutingModule
  ],
  declarations: [DarkHambugarPage]
})
export class DarkHambugarPageModule {}
