import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NavComponent } from './nav/nav.component';
import { navRoutes } from './nav/nav.routing';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { HomeComponent } from './nav/home';
import { StoreComponent } from './nav/store';
import { VideoComponent } from './nav/videos';
import { AboutComponent } from './nav/about';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    StoreComponent,
    VideoComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    navRoutes
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
