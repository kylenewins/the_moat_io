import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { VideosComponent } from './views/videos/videos.component';
import { ShowsComponent } from './views/shows/shows.component';

import { SharedModule } from './shared/shared.module';


@NgModule({
  declarations: [
    AppComponent,
    VideosComponent,
    ShowsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
