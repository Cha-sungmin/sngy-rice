import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'tab1',
    loadChildren: () => import('./tab1/tab1.module').then(m => m.Tab1PageModule)
  },
  {
    path: 'hambugar',
    loadChildren: () => import('./subpage/page/hambugar/hambugar.module').then( m => m.HambugarPageModule)
  },
  {
    path: 'hansick',
    loadChildren: () => import('./subpage/page/hansick/hansick.module').then( m => m.HansickPageModule)
  },
  {
    path: 'chines',
    loadChildren: () => import('./subpage/page/chines/chines.module').then( m => m.ChinesPageModule)
  },
  {
    path: 'bunsick',
    loadChildren: () => import('./subpage/page/bunsick/bunsick.module').then( m => m.BunsickPageModule)
  },
  {
    path: 'porkcutlet',
    loadChildren: () => import('./subpage/page/porkcutlet/porkcutlet.module').then( m => m.PorkcutletPageModule)
  },
  {
    path: 'japanese',
    loadChildren: () => import('./subpage/page/japanese/japanese.module').then( m => m.JapanesePageModule)
  },
  {
    path: 'western-style',
    loadChildren: () => import('./subpage/page/western-style/western-style.module').then( m => m.WesternStylePageModule)
  },
  {
    path: 'gimtang',
    loadChildren: () => import('./subpage/dark-page/gimtang/gimtang.module').then(m => m.GimtangPageModule)
  },
  {
    path: 'sul',
    loadChildren: () => import('./subpage/dark-page/sul/sul.module').then(m => m.SulPageModule)
  },
  {
    path: 'chikien',
    loadChildren: () => import('./subpage/dark-page/chikien/chikien.module').then(m => m.ChikienPageModule)
  },
  {
    path: 'dark-bunsick',
    loadChildren: () => import('./subpage/dark-page/dark-bunsick/dark-bunsick.module').then(m => m.DarkBunsickPageModule)
  },
  {
    path: 'dark-japanese',
    loadChildren: () => import('./subpage/dark-page/dark-japanese/dark-japanese.module').then(m => m.DarkJapanesePageModule)
  },
  {
    path: 'dark-hambugar',
    loadChildren: () => import('./subpage/dark-page/dark-hambugar/dark-hambugar.module').then(m => m.DarkHambugarPageModule)
  },
  {
    path: 'dark-porkcutlet',
    loadChildren: () => import('./subpage/dark-page/dark-porkcutlet/dark-porkcutlet.module').then(m => m.DarkPorkcutletPageModule)
  },
  {
    path: 'dark-westen-style',
    loadChildren: () => import('./subpage/dark-page/dark-westen-style/dark-westen-style.module').then(m => m.DarkWestenStylePageModule)
  },
  {
    path: 'dark-hansick',
    loadChildren: () => import('./subpage/dark-page/dark-hansick/dark-hansick.module').then(m => m.DarkHansickPageModule)
  },
  {
    path: 'tab4',
    loadChildren: () => import('./tab4/tab4.module').then(m => m.Tab4PageModule)
  },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
