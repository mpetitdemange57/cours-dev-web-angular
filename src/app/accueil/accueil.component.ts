import {Component} from '@angular/core';

@Component({
  selector: 'accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.scss']
})
export class AccueilComponent {
  name: string;

  constructor() {
    this.name="Marc Petitdemange";
  }

}
