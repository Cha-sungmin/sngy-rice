import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChikienPageRoutingModule } from './chikien-routing.module';

import { ChikienPage } from './chikien.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChikienPageRoutingModule
  ],
  declarations: [ChikienPage]
})
export class ChikienPageModule {}
