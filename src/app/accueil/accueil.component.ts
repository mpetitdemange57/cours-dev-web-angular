import {Component} from '@angular/core';
import {Person} from "../model/Person";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.scss']
})
export class AccueilComponent {

  employe!: Person;


  constructor(private readonly httpClient: HttpClient) {
    this.httpClient.get<Array<Person>>("http://localhost:3000/api/employe").subscribe((listDuPersonnel:Array<Person>) => {
      this.employe = listDuPersonnel[0];
    })
  }


  /**
   * Returns random people
   */
  random() {
    this.httpClient.get<Person>("http://localhost:3000/api/employe/random").subscribe((personneRandom:Person) => {
      this.employe = personneRandom;
    })
  }

  delete(person: Person){
    this.httpClient.delete("http://localhost:3000/api/employe/:id".replace(':id', person.id!)).subscribe(() => {
      this.random();
    });
  }

}
