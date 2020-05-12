import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CadastrologinPageRoutingModule } from './cadastrologin-routing.module';

import { CadastrologinPage } from './cadastrologin.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CadastrologinPageRoutingModule
  ],
  declarations: [CadastrologinPage]
})
export class CadastrologinPageModule {}
