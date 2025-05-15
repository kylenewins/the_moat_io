import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './views/home/home.component';
import { MusicComponent } from './views/music/music.component';
import { VideosComponent } from './views/videos/videos.component';
import { ShowsComponent } from './views/shows/shows.component';

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
  { 
    path: 'videos', 
    loadChildren: () => import('./views/videos/videos.module').then(m => m.VideosModule),
  },
  { 
    path: 'shows', 
    loadChildren: () => import('./views/shows/shows.module').then(m => m.ShowsModule),
  }
]
;

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponent = [
  HomeComponent,
  MusicComponent,
  VideosComponent,
  ShowsComponent
];