import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormControl} from "@angular/forms";
import {map, Observable, startWith} from "rxjs";
import {ListPersonnelService} from "../service/list-personnel.service";

@Component({
  selector: 'barre-de-recherche',
  templateUrl: './barre-de-recherche.component.html',
  styleUrls: ['./barre-de-recherche.component.scss']
})
export class BarreDeRechercheComponent implements OnInit{
  barreDeRecherche = new FormControl();
  personnel:any[] = [];
  @Input() personnel$!: Observable<any>;
  @Output('search') searchEvent$ = new EventEmitter<string>();

  constructor(private readonly listPersonnelService: ListPersonnelService,) {
  }


  ngOnInit(): void {
    //Methode vide

    this.listPersonnelService.fetch().subscribe(personnel => {
      this.personnel = personnel;
    });

    this.personnel$ = this.barreDeRecherche.valueChanges.pipe(
      startWith(''),
      map(employe => (
       employe ? this._filter(employe) : this.personnel.slice()
      ))
    );
  }

  private _filter(name: string): any[] {
    const filterValue = name.toLowerCase();
    return this.personnel.filter(employe => (employe.prenom + " " + employe.nom).toLowerCase().includes(filterValue));
  }

  search(value: string){
    this.searchEvent$.emit(value);
  }

}
