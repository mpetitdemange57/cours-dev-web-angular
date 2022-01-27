import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AccueilComponent} from "./accueil/accueil.component";
import {NomResolver} from "./nom.resolver";

const routes: Routes = [
  {path:"accueil",component:AccueilComponent,resolve:{ monNom : NomResolver}}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
