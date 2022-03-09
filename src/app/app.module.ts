import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AuthentificationComponent } from './components/authentification/authentification.component';
import { InscriptionComponent } from './components/inscription/inscription.component';
import { RdvComponent } from './rdv/rdv.component';


@NgModule({
  declarations: [
    AppComponent,
    AuthentificationComponent,
    InscriptionComponent,
    RdvComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
     FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
