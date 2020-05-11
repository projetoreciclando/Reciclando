import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CadastrovendedorPage } from './cadastrovendedor.page';

const routes: Routes = [
  {
    path: '',
    component: CadastrovendedorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CadastrovendedorPageRoutingModule {}
