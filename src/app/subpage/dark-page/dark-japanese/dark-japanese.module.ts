import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DarkJapanesePageRoutingModule } from './dark-japanese-routing.module';

import { DarkJapanesePage } from './dark-japanese.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DarkJapanesePageRoutingModule
  ],
  declarations: [DarkJapanesePage]
})
export class DarkJapanesePageModule {}
