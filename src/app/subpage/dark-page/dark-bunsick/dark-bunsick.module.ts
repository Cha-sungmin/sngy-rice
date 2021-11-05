import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DarkBunsickPageRoutingModule } from './dark-bunsick-routing.module';

import { DarkBunsickPage } from './dark-bunsick.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DarkBunsickPageRoutingModule
  ],
  declarations: [DarkBunsickPage]
})
export class DarkBunsickPageModule {}
