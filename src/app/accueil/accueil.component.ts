import {Component} from '@angular/core';
import {Person} from "../model/Person";

@Component({
  selector: 'accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.scss']
})
export class AccueilComponent {

  employe!: Person;


  constructor() {
  //Completez moi
  }


  /**
   * Returns random people
   */
  random() {
    //Completez moi
  }

}
