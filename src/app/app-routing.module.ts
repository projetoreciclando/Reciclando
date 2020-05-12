import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { Tabs3Guard } from './guards/tabs3.guard';
import { Tabs2Guard } from './guards/tabs2.guard';

const routes: Routes = [
  
  {
    path: "", redirectTo:"home", pathMatch: "full"
  },
  
  {
    path: "home",
    loadChildren: () =>
    import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)

  }, 
  {
    path: 'tab2',
    loadChildren: () => import('./tab2/tab2.module').then( m => m.Tab2PageModule),
    canActivate: [Tabs2Guard]
  },  
  {
    path: 'tab4',
    loadChildren: () => import('./tab4/tab4.module').then( m => m.Tab4PageModule),
    canActivate: [Tabs3Guard]
  },
  {
    path: 'tab5',
    loadChildren: () => import('./tab5/tab5.module').then( m => m.Tab5PageModule)
  },
 
  {
    path: 'cadastro',
    loadChildren: () => import('./cadastro/cadastro.module').then( m => m.CadastroPageModule)
  },
  {
    path: 'cadastrovendedor',
    loadChildren: () => import('./cadastrovendedor/cadastrovendedor.module').then( m => m.CadastrovendedorPageModule)
  },
  {
    path: 'perfil-vendedor',
    loadChildren: () => import('./perfil-vendedor/perfil-vendedor.module').then( m => m.PerfilVendedorPageModule)
  },
  {
    path: 'vendertroca',
    loadChildren: () => import('./vendertroca/vendertroca.module').then( m => m.VendertrocaPageModule)
  },
  {
    path: 'recebevendedor',
    loadChildren: () => import('./recebevendedor/recebevendedor.module').then( m => m.RecebevendedorPageModule)
  },
  {
    path: 'cadastrologin',
    loadChildren: () => import('./cadastrologin/cadastrologin.module').then(m => m.CadastrologinPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
