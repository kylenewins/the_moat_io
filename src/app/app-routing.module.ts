import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './views/home/home.component';
import { MusicComponent } from './views/music/music.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { 
    path: 'home', 
    loadChildren: () => import('./views/home/home.module').then(m => m.HomeModule),
  },
  { 
    path: 'music', 
    loadChildren: () => import('./views/music/music.module').then(m => m.MusicModule),
  },
]
;

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponent = [
  HomeComponent,
  MusicComponent
];