import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WesternStylePageRoutingModule } from './western-style-routing.module';

import { WesternStylePage } from './western-style.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WesternStylePageRoutingModule
  ],
  declarations: [WesternStylePage]
})
export class WesternStylePageModule {}
