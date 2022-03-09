import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthentificationComponent } from './components/authentification/authentification.component';
import { InscriptionComponent } from './components/inscription/inscription.component';
import { RdvComponent } from './rdv/rdv.component';

const routes: Routes = [
  {
    path:"",component:AuthentificationComponent
  },
  {
    path:"inscription",component:InscriptionComponent
  },
  {
    path:"rdv",component:RdvComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
