import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { CreatifComponent } from './creatif/creatif.component';
import { ClientComponent } from './client/client.component';

const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent 
  },
  {
    path: 'connexion',
    component: ConnexionComponent 
  },
  {
    path: 'client',
    component: ClientComponent 
  },
  {
    path: 'creatif',
    component: CreatifComponent 
  },
];


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CreatifComponent,
    ClientComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(
      appRoutes
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
