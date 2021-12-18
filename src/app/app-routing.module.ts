import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AccueilComponent} from "./accueil/accueil.component";
import {GraphComponent} from "./graph/graph.component";
import {ListPersonnelComponent} from "./list-personnel/list-personnel.component";

const routes: Routes = [
  { path: '', redirectTo: 'accueil', pathMatch: 'full' },
  {path:'accueil', component: AccueilComponent},
  {path:'listPersonnel', component: ListPersonnelComponent},
  {path:'graph', component: GraphComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
