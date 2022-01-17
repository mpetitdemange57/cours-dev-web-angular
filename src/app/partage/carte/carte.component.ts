import {Component} from '@angular/core';
import {Person} from "../../model/Person";

@Component({
  selector: 'carte',
  templateUrl: './carte.component.html',
  styleUrls: ['./carte.component.scss']
})
export class CarteComponent {

  employe: Person | undefined;

  constructor() {
    //Empty
  }
}
