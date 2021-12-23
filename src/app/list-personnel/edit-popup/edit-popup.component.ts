import {Component} from '@angular/core';
import {MatDialogRef} from "@angular/material/dialog";
import {Person} from "../../partage/service/list-personnel.service";

export type PopupAction = Person & {mode: string};

@Component({
  selector: 'app-edit-popup',
  templateUrl: './edit-popup.component.html',
  styleUrls: ['./edit-popup.component.scss']
})
export class EditPopupComponent {

  constructor(public dialogRef: MatDialogRef<EditPopupComponent>) {}

  closeDialog(result: PopupAction = {mode: 'none'}) {
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
