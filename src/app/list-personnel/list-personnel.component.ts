import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {MatDialog, MatDialogRef} from "@angular/material/dialog";
import {mergeMap} from "rxjs";
import {AjoutPopupComponent, PopupAction} from "./ajout-popup/ajout-popup.component";
import {ListPersonnelService, Person} from "../partage/service/list-personnel.service";


@Component({
  selector: 'app-service',
  templateUrl: './list-personnel.component.html',
  styleUrls: ['./list-personnel.component.scss']
})
export class ListPersonnelComponent implements OnInit {

  private addDialog: MatDialogRef<AjoutPopupComponent> | any;
  personnel: Person[] = [];
  dialogStatus = 'inactive';
  view = 'card';

  constructor(
    private readonly listPersonnelService: ListPersonnelService,
    public dialog: MatDialog,
    private cdr: ChangeDetectorRef) {

  }

  personnelFiltered(personnel: any[]) {
    this.personnel = personnel;
  }

  /**
   * OnInit implementation
   */
  ngOnInit() {
    this.listPersonnelService.fetch().subscribe(personnel => {
      this.personnel = personnel || [];
    });
  }

  delete(person: Person) {
    this.listPersonnelService.delete(person.id!).subscribe(personnel => {
      this.personnel = personnel;
      this.listPersonnelService.updatedEmployeeList(person.id!);
      this.cdr.markForCheck();
    });
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
    this.dialogStatus = 'active';
    this.addDialog = this.dialog.open(AjoutPopupComponent, {
      width: '600px',
      data: {}
    });

    this.addDialog.afterClosed().subscribe({
      next: (popupAction: PopupAction) => {

        const {
          mode,
          ...person
        } = popupAction;

        this.dialogStatus = 'inactive';

        if (mode === 'none') {
          return;
        }

        mode === 'create' ? this.add(person) : this.update(person);
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
