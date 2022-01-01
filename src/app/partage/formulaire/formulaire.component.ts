import {Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {MatChipInputEvent} from "@angular/material/chips";
import {COMMA, ENTER} from "@angular/cdk/keycodes";
import {Person} from "../service/list-personnel.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'formulaire',
  templateUrl: './formulaire.component.html',
  styleUrls: ['./formulaire.component.scss']
})
export class FormulaireComponent implements OnInit {
  form: FormGroup;
  @Input() employeModel: Person;
  @ViewChild("fileInput") fileInput!: ElementRef;


  @Output('cancel') cancelEvent$: EventEmitter<any>;
  @Output('submit') submitEvent$: EventEmitter<any>;


  readonly separatorKeysCodes = [ENTER, COMMA] as const;

  fileName : string | null = '';

  constructor() {
    this.submitEvent$ = new EventEmitter();
    this.cancelEvent$ = new EventEmitter();
    this.form = FormulaireComponent.buildForm();
    this.employeModel = {
      titres: []
    };

  }

  ngOnInit() {
    this.form.patchValue({
      id: this.employeModel.id,
      nom: this.employeModel.nom,
      prenom: this.employeModel.prenom,
      email: this.employeModel.email,
      titres: this.employeModel.titres || [],
      sexe: this.employeModel.sexe,
      photo: this.employeModel.photo,
      telephone: this.employeModel.telephone
    });
  }

  cancel() {
    this.cancelEvent$.emit();
  }

  submit(employe: Person) {
    debugger; //Formulaire
    this.submitEvent$.emit(employe);
  }


  addChipset(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    if (value) {
      this.employeModel.titres!.push(value);
    }
    event.chipInput!.clear();
  }

  removeChipset(titre: any): void {
    const index = this.employeModel.titres!.indexOf(titre);
    this.employeModel.titres!.splice(index, 1);
  }

  onFileSelected(event:any) {
    const file:File = event.target.files[0];
    if (file) {
        this.fileName = file.name;
    }
  }

  /**
   * Fonction pour construire notre formulaire
   * @returns {FormGroup}
   *
   * @private
   */
  private static buildForm(): FormGroup {
    return new FormGroup({
      id: new FormControl(''),
      prenom: new FormControl('', Validators.compose([Validators.required, Validators.minLength(2)])),
      nom: new FormControl('', Validators.compose([Validators.required, Validators.minLength(2)])),
      email: new FormControl('', Validators.required),
      titres: new FormControl(''),
      sexe: new FormControl(),
      photo: new FormControl(''),
      telephone: new FormControl('', Validators.compose([Validators.required, Validators.pattern('\\d{10}')])),
    });
  }

}
