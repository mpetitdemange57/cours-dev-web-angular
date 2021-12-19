import {Component, OnInit} from '@angular/core';
import {FormControl} from "@angular/forms";
import {ListPersonnelService} from "../service/list-personnel.service";
import {map, Observable, startWith} from "rxjs";

@Component({
  selector: 'barre-de-recherche',
  templateUrl: './barre-de-recherche.component.html',
  styleUrls: ['./barre-de-recherche.component.scss']
})
export class BarreDeRechercheComponent implements OnInit{
  barreDeRecherche = new FormControl();
  personnel:any[] = [];
  filteredPersonnel!: Observable<any[]>;

  constructor(private readonly listPersonneService: ListPersonnelService) {
  }


  ngOnInit(): void {
    //Methode vide
    this.filteredPersonnel = this.barreDeRecherche.valueChanges.pipe(
      startWith(''),
      map(employe => (employe ? this._filter(employe) : this.personnel.slice())),
    );
    this.listPersonneService.fetch().subscribe(personnel => {
      this.personnel = personnel;
    });
  }

  private _filter(name: string): any[] {
    const filterValue = name.toLowerCase();
    return this.personnel.filter(employe => (employe.prenom + " " + employe.nom).toLowerCase().includes(filterValue));
  }

}
