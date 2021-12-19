import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'barre-de-recherche',
  templateUrl: './barre-de-recherche.component.html',
  styleUrls: ['./barre-de-recherche.component.scss']
})
export class BarreDeRechercheComponent implements OnInit{

  @Input() personnel: any[];

  constructor() {
    this.personnel = [];
    debugger;
    console.log("Personnel : " + this.personnel);
  }

  ngOnInit(): void {
    //Methode vide
  }
}
