import {Component} from '@angular/core';
import {MatDialogRef} from "@angular/material/dialog";
import {Person} from "../../partage/service/list-personnel.service";

export type PopupAction = Person & {mode: string};

@Component({
  selector: 'app-ajout-popup',
  templateUrl: './ajout-popup.component.html',
  styleUrls: ['./ajout-popup.component.scss']
})
export class AjoutPopupComponent {

  constructor(public dialogRef: MatDialogRef<AjoutPopupComponent>) {}

  closeDialog(result: Person & {mode?: string} | null = null) {
    this.dialogRef.close(result);
  }

  onCancel() {
    this.closeDialog();
  }

  onCreate(person: Person) {
    this.closeDialog({...person, mode: 'create'});
  }

  onUpdate(person: Person) {
    this.closeDialog({...person, mode: 'update'});
  }

}
