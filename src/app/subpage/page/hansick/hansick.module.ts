import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HansickPageRoutingModule } from './hansick-routing.module';

import { HansickPage } from './hansick.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HansickPageRoutingModule
  ],
  declarations: [HansickPage]
})
export class HansickPageModule {}
