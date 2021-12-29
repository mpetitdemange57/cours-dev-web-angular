import {Component, EventEmitter, Output} from '@angular/core';
import {MatChipInputEvent} from "@angular/material/chips";
import {COMMA, ENTER} from "@angular/cdk/keycodes";
import {Person} from "../service/list-personnel.service";

@Component({
  selector: 'formulaire',
  templateUrl: './formulaire.component.html',
  styleUrls: ['./formulaire.component.scss']
})
export class FormulaireComponent {

  @Output('cancel') cancel$: EventEmitter<any> = new EventEmitter();

  @Output('personAdd') add$: EventEmitter<Person> = new EventEmitter();
  @Output('personUpdate') update$: EventEmitter<Person> = new EventEmitter();

  fileName : string | null = '';

  readonly separatorKeysCodes = [ENTER, COMMA] as const;

  titres: any[] = [];

  cancel() {
    this.cancel$.emit();
  }

  add(employe: Person) {
    employe.titres = this.titres;
    this.add$.emit(employe);
  }

  update(employe: Person) {
    employe.titres = this.titres;
    this.update$.emit(employe);
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
