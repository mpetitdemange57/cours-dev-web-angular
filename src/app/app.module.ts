import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatToolbarModule} from "@angular/material/toolbar";
import {AccueilComponent} from './accueil/accueil.component';
import {PersonnelComponent} from './personnel/personnel.component';
import {GraphComponent} from './graph/graph.component';
import {CarteComponent} from './partage/carte/carte.component';
import {MatCardModule} from "@angular/material/card";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {MatSidenavModule} from "@angular/material/sidenav";
import {ListPersonnelComponent} from './list-personnel/list-personnel.component';
import {FormulaireComponent} from './partage/formulaire/formulaire.component';
import {AjoutPopupComponent} from './list-personnel/ajout-popup/ajout-popup.component';
import {MatListModule} from "@angular/material/list";
import {HttpClientModule} from "@angular/common/http";
import {MatDialogModule} from "@angular/material/dialog";
import { ContactComponent } from './contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    PersonnelComponent,
    GraphComponent,
    CarteComponent,
    ListPersonnelComponent,
    FormulaireComponent,
    AjoutPopupComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    HttpClientModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
