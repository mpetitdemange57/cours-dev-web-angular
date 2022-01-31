import {Component} from '@angular/core';
import {Person} from "../model/Person";
import {ListPersonnelService} from "../partage/service/list-personnel.service";

@Component({
  selector: 'accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.scss']
})
export class AccueilComponent {

  employe: Person = {};


  constructor(private readonly listPersonnelService:ListPersonnelService) {
    this.random();
  }


  /**
   * Returns random people
   */
  random() {
    this.listPersonnelService.fetchRandom().subscribe(employe => {
      this.employe = employe;
    });
  }

  delete(person: Person){
    this.listPersonnelService.delete(person.id!).subscribe(() => {
      this.random();
    });
  }



}
