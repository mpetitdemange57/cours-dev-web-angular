import {Component, OnInit} from '@angular/core';
import {ListPersonnelService} from "../partage/service/list-personnel.service";
import {Person} from "../model/Person";
import {MatDialog, MatDialogRef} from "@angular/material/dialog";
import {mergeMap} from "rxjs";
import {AjoutPopupComponent} from "./ajout-popup/ajout-popup.component";

@Component({
  selector: 'app-list-personnel',
  templateUrl: './list-personnel.component.html',
  styleUrls: ['./list-personnel.component.scss']
})
export class ListPersonnelComponent implements OnInit {

  personnel: Person[] = [];
  view:string = "card";
  dialogStatus: string = "inactive";
  private addDialog: MatDialogRef<AjoutPopupComponent> | any;

  constructor( private readonly listPersonnelService: ListPersonnelService, public dialog: MatDialog) {
    //Rien à faire ici
  }

  ngOnInit(): void {
    this.listPersonnelService.fetch().subscribe(personnel => {
      this.personnel = personnel || [];
    });
  }

  delete(person: Person) {
    this.listPersonnelService.delete(person.id!).subscribe(personnel => {
      this.personnel = personnel;
    });
  }

  switchView() {
    if(this.view==="card"){
      this.view = "list"
    }
    else{
      this.view = "card";
    }
  }

  add(person: Person) {
    this.listPersonnelService
      .create(person)
      .pipe(mergeMap(() => this.listPersonnelService.fetch()))
      .subscribe(personnel => {
        this.personnel = personnel;
        this.hideDialog();
      });
  }

  update(person: Person) {
    this.listPersonnelService
      .update(person)
      .pipe(mergeMap(() => this.listPersonnelService.fetch()))
      .subscribe(personnel => {
        this.personnel = personnel;
        this.hideDialog();
      });
  }

  showDialog() {
    debugger;
    this.dialogStatus = 'active';
    this.addDialog = this.dialog.open(AjoutPopupComponent, {
      width: '600px',
      data: {}
    });

    this.addDialog.afterClosed().subscribe((person:any)=> {
      this.dialogStatus = 'inactive';
      if (person) {
        this.add(person);
      }
    });
  }

  hideDialog() {
    this.dialogStatus = 'inactive';
    if(this.addDialog != undefined){
      this.addDialog.close();
    }
  }
}
