import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RecebevendedorPageRoutingModule } from './recebevendedor-routing.module';

import { RecebevendedorPage } from './recebevendedor.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RecebevendedorPageRoutingModule
  ],
  declarations: [RecebevendedorPage]
})
export class RecebevendedorPageModule {}
