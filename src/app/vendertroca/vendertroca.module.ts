import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VendertrocaPageRoutingModule } from './vendertroca-routing.module';

import { VendertrocaPage } from './vendertroca.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VendertrocaPageRoutingModule
  ],
  declarations: [VendertrocaPage]
})
export class VendertrocaPageModule {}
