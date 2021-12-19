import {Component, OnInit} from '@angular/core';
import {ListPersonnelService} from "../partage/service/list-personnel.service";

const SERVER_URL = 'http://localhost:3000';


@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.scss']
})
export class AccueilComponent implements OnInit {
  employe: any = {};

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
