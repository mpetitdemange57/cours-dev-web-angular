import {Component} from '@angular/core';

@Component({
  selector: 'accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.scss']
})
export class AccueilComponent {
  nom: string | undefined;

  constructor() {
    //Vide mais j'en suis conscient
  }

}
