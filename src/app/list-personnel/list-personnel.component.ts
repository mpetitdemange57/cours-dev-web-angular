import { Component, OnInit } from '@angular/core';
import {ListPersonnelService} from "../partage/service/list-personnel.service";
import {Person} from "../model/Person";

@Component({
  selector: 'app-list-personnel',
  templateUrl: './list-personnel.component.html',
  styleUrls: ['./list-personnel.component.scss']
})
export class ListPersonnelComponent implements OnInit {

  personnel: Person[] = [];

  constructor( private readonly listPersonnelService: ListPersonnelService) {
    this.listPersonnelService.fetch().subscribe(personnel => {
      this.personnel = personnel || [];
    });
  }

  ngOnInit(): void {
    //Vide
  }

  delete(person: Person) {
    this.listPersonnelService.delete(person.id!).subscribe(personnel => {
      this.personnel = personnel;
    });
  }

  switchView() {
    //A compléter
  }
}
