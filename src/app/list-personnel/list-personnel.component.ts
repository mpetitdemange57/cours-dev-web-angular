import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {MatDialog, MatDialogRef} from "@angular/material/dialog";
import {mergeMap} from "rxjs";
import {AjoutPopupComponent} from "./ajout-popup/ajout-popup.component";

const SERVER_URL = 'http://localhost:9000';

@Component({
  selector: 'app-list-personnel',
  templateUrl: './list-personnel.component.html',
  styleUrls: ['./list-personnel.component.scss']
})
export class ListPersonnelComponent implements OnInit {
  private addDialog: MatDialogRef<AjoutPopupComponent> | any;
  personnel: any;
  dialogStatus = 'inactive';

  constructor(private _http: HttpClient, public dialog: MatDialog) {}

  /**
   * OnInit implementation
   */
  ngOnInit() {
    // this._http.get(`${SERVER_URL}/api/personnel/`).subscribe(people => (this.personnel = people));
  }

  delete(person: any) {
    this._http.delete(`${SERVER_URL}/api/personnel/${person.id}`).subscribe(people => (this.personnel = people));
  }

  add(person: any) {
    this._http
      .post(`${SERVER_URL}/api/peoples/`, person)
      .pipe(mergeMap(_ => this._http.get(`${SERVER_URL}/api/peoples/`)))
      .subscribe((personnel) => {
        this.personnel = personnel;
        this.hideDialog();
      });
  }


  showDialog() {
    this.dialogStatus = 'active';
    this.addDialog = this.dialog.open(AjoutPopupComponent, {
      width: '450px',
      data: {}
    });

    this.addDialog.afterClosed().subscribe((person: any) => {
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
