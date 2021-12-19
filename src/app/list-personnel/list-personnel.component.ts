import {Component, OnInit} from '@angular/core';
import {MatDialog, MatDialogRef} from "@angular/material/dialog";
import {mergeMap} from "rxjs";
import {AjoutPopupComponent} from "./ajout-popup/ajout-popup.component";
import {FormControl} from "@angular/forms";
import {ListPersonnelService} from "../partage/service/list-personnel.service";


@Component({
  selector: 'app-service',
  templateUrl: './list-personnel.component.html',
  styleUrls: ['./list-personnel.component.scss']
})
export class ListPersonnelComponent implements OnInit {
  private addDialog: MatDialogRef<AjoutPopupComponent> | any;
  personnel: any[] = [];
  dialogStatus = 'inactive';
  personnelCtrl = new FormControl();
  view = 'card';


  constructor(private readonly listPersonnelService: ListPersonnelService, public dialog: MatDialog) {

  }

  /**
   * OnInit implementation
   */
  ngOnInit() {
    this.listPersonnelService.fetch().subscribe(personnel => {
      this.personnel = personnel;
    });
  }

  delete(person: any) {
    this.listPersonnelService.delete(person.id).subscribe(personnel => {
      this.personnel = personnel;
    });
  }

  add(person: any) {
    this.listPersonnelService
      .create(person)
      .pipe(mergeMap(() => this.listPersonnelService.fetch()))
      .subscribe(personnel => {
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

  switchView() {
    this.view = this.view === 'card' ? 'list' : 'card';
  }

}
