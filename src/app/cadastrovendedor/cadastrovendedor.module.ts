import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CadastrovendedorPageRoutingModule } from './cadastrovendedor-routing.module';

import { CadastrovendedorPage } from './cadastrovendedor.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CadastrovendedorPageRoutingModule
  ],
  declarations: [CadastrovendedorPage]
})
export class CadastrovendedorPageModule {}
