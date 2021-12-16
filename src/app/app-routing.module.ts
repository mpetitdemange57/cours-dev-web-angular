import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AccueilComponent} from "./accueil/accueil.component";
import {PersonnelComponent} from "./personnel/personnel.component";
import {GraphComponent} from "./graph/graph.component";

const routes: Routes = [
  { path: '', redirectTo: 'accueil', pathMatch: 'full' },
  {path:'accueil', component: AccueilComponent},
  {path:'personnel', component: PersonnelComponent},
  {path:'graph', component: GraphComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
