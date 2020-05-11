import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VendertrocaPage } from './vendertroca.page';

const routes: Routes = [
  {
    path: '',
    component: VendertrocaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VendertrocaPageRoutingModule {}
