import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";

const SERVER_URL = 'http://localhost:9000';


@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.scss']
})
export class AccueilComponent implements OnInit {
  employee: any = {};
  constructor(private _http: HttpClient) {}

  ngOnInit(): void {
    this._http.get(`${SERVER_URL}/api/peoples/`).subscribe(people => (this.employee = people));
  }

  random() {
    this._http.get(`${SERVER_URL}/api/peoples/random`).subscribe(employee => (this.employee = employee));
  }
}
