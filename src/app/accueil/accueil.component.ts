import {Component} from '@angular/core';
import {Personnel} from "src/assets/Personnel";
import {Person} from "../model/Person";

@Component({
  selector: 'accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.scss']
})
export class AccueilComponent {

  employe!: Person;


  constructor() {
    this.random();
  }


  /**
   * Returns random people
   */
  random() {
    this.employe = Personnel[Math.floor(Math.random() * Personnel.length)];
  }

}
