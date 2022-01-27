import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Data} from "@angular/router";

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.scss']
})
  export class AccueilComponent implements OnInit{
    monNom: string | undefined;


  constructor(private route: ActivatedRoute) {
    debugger;
  }

  ngOnInit(): void {
    this.route.data.subscribe(((data:Data) => {this.monNom = data['monNom']}));
  }
}
