import {LOCALE_ID, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccueilComponent } from './accueil/accueil.component';
import {HttpClientModule} from "@angular/common/http";
import { ChildComponent } from './child/child.component';

import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
import localeDe from '@angular/common/locales/de';
import { BananaPipe } from './banana.pipe';
import { MyDirective } from './my.directive';
import { CouleurFondDirective } from './couleur-fond.directive';
import { ClassDirective } from './class.directive';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
registerLocaleData(localeFr);
registerLocaleData(localeDe);

@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    ChildComponent,
    BananaPipe,
    MyDirective,
    CouleurFondDirective,
    ClassDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
