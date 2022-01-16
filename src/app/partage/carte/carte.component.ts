import {Component} from '@angular/core';
import {Person} from "../../model/Person";

@Component({
  selector: 'carte',
  templateUrl: './carte.component.html',
  styleUrls: ['./carte.component.scss']
})
export class CarteComponent {

  employe: Person | undefined = {
    id: "1",
    nom: "Grey",
    prenom: "Meredith",
    photo: "assets/meredith-grey.jpg",
    age: "32",
    sexe: "F",
    telephone: "0671308533",
    email: "meredith.grey@gmail.com",
    titres: [
      "interne",
    ],
    chefId: "2"
  };

  constructor() {
    //Empty
  }
}
