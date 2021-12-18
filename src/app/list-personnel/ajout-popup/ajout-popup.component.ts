import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-ajout-popup',
  templateUrl: './ajout-popup.component.html',
  styleUrls: ['./ajout-popup.component.scss']
})
export class AjoutPopupComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<AjoutPopupComponent>) {}

  closeDialog(result = null) {
    this.dialogRef.close(result);
  }

  ngOnInit(): void {
  }

  onCancel() {
    this.closeDialog();
  }

  onSave(person: any) {
    this.closeDialog(person);
  }

}
