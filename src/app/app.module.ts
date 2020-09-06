import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';

import {GalleriaModule} from 'primeng/galleria';

import { CreationsComponent } from './creations/creations.component';
import { CvComponent } from './cv/cv.component';
import { AboutMeComponent } from './about-me/about-me.component';

import { GameFocusComponent } from './game-focus/game-focus.component'

const appRoutes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'A Propos' },
  { path: 'A Propos', component: AboutMeComponent },
  { path: 'Creations', component: CreationsComponent },
  { path: 'Creations/:title', component: GameFocusComponent },
  { path: 'CV', component: CvComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    CreationsComponent,
    CvComponent,
    AboutMeComponent,
    GameFocusComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GalleriaModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
