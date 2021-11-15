import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalpagePageRoutingModule } from './modalpage-routing.module';

import { ModalpagePage } from './modalpage.page';

import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalpagePageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [ModalpagePage],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class ModalpagePageModule {}
