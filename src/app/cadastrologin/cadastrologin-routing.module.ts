import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CadastrologinPage } from './cadastrologin.page';

const routes: Routes = [
  {
    path: '',
    component: CadastrologinPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CadastrologinPageRoutingModule {}
