import {Component, EventEmitter, Output} from '@angular/core';
import {MatChipInputEvent} from "@angular/material/chips";
import {COMMA, ENTER} from "@angular/cdk/keycodes";

@Component({
  selector: 'formulaire',
  templateUrl: './formulaire.component.html',
  styleUrls: ['./formulaire.component.scss']
})
export class FormulaireComponent {

  @Output('cancel') cancel$: EventEmitter<any>;
  @Output('personAdd') add$: EventEmitter<any>;
  fileName = '';

  readonly separatorKeysCodes = [ENTER, COMMA] as const;
  titres: any[] = [];
  addOnBlur = true;

  constructor() {
    this.add$ = new EventEmitter();
    this.cancel$ = new EventEmitter();
  }


  cancel() {
    this.cancel$.emit();
  }

  add(employe: any) {
    employe.titres = this.titres;
    this.add$.emit(employe);
  }

  addChipset(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    if (value) {
      this.titres.push(value);
    }

    event.chipInput!.clear();
  }

  removeChipset(titre: any): void {
    const index = this.titres.indexOf(titre);

    if (index >= 0) {
      this.titres.splice(index, 1);
    }
  }

  onFileSelected(event:any) {

    const file:File = event.target.files[0];

    if (file) {

        this.fileName = file.name;

        const formData = new FormData();

        formData.append("thumbnail", file);
    }
}

}
