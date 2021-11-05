import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BunsickPageRoutingModule } from './bunsick-routing.module';

import { BunsickPage } from './bunsick.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BunsickPageRoutingModule
  ],
  declarations: [BunsickPage]
})
export class BunsickPageModule {}
