import {Component, OnInit} from '@angular/core';
import {ListPersonnelService, Person} from "../partage/service/list-personnel.service";

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.scss']
})
export class AccueilComponent implements OnInit {
  employe: Person = {};

  constructor(private readonly listPersonnelService: ListPersonnelService) {}

  ngOnInit(): void {
    this.random();
  }

  random() {
    this.listPersonnelService.fetchRandom().subscribe(employe => {
      this.employe = employe;
    });
  }
}
