import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DarkHansickPageRoutingModule } from './dark-hansick-routing.module';

import { DarkHansickPage } from './dark-hansick.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DarkHansickPageRoutingModule
  ],
  declarations: [DarkHansickPage]
})
export class DarkHansickPageModule {}
