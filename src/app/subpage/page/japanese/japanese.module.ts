import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { JapanesePageRoutingModule } from './japanese-routing.module';

import { JapanesePage } from './japanese.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    JapanesePageRoutingModule
  ],
  declarations: [JapanesePage]
})
export class JapanesePageModule {}
