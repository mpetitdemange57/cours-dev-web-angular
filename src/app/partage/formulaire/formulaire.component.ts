import {AfterViewInit, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {MatChipInputEvent} from "@angular/material/chips";
import {COMMA, ENTER} from "@angular/cdk/keycodes";
import {Person} from "../service/list-personnel.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'formulaire',
  templateUrl: './formulaire.component.html',
  styleUrls: ['./formulaire.component.scss']
})
export class FormulaireComponent implements OnInit,AfterViewInit {
  form: FormGroup;
  @Input() employeModel: Person;


  @Output('cancel') cancelEvent$: EventEmitter<any>;
  @Output('submit') submitEvent$: EventEmitter<any>;


  readonly separatorKeysCodes = [ENTER, COMMA] as const;

  fileName : string | null = '';
  titres: any[] = [];

  constructor() {
    this.submitEvent$ = new EventEmitter();
    this.cancelEvent$ = new EventEmitter();
    this.form = this.buildForm();
    this.employeModel = {};

  }

  ngOnInit() {

  }

  ngAfterViewInit() {
    debugger;
    this.form.setValue({
      id: this.employeModel.id,
      nom: this.employeModel.nom,
      prenom: this.employeModel.prenom
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

  /**
   * Fonction pour construire notre formulaire
   * @returns {FormGroup}
   *
   * @private
   */
  private buildForm(): FormGroup {
    return new FormGroup({
      id: new FormControl(''),
      prenom: new FormControl('', Validators.compose([Validators.required, Validators.minLength(2)])),
      nom: new FormControl('', Validators.compose([Validators.required, Validators.minLength(2)])),
      email: new FormControl('', Validators.required),
      sexe: new FormControl(),
      photo: new FormControl('https://randomuser.me/api/portraits/lego/6.jpg'),
      telephone: new FormControl('', Validators.compose([Validators.required, Validators.pattern('\\d{10}')])),
    });
  }

}
