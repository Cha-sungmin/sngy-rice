import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChinesPageRoutingModule } from './chines-routing.module';

import { ChinesPage } from './chines.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChinesPageRoutingModule
  ],
  declarations: [ChinesPage]
})
export class ChinesPageModule {}
