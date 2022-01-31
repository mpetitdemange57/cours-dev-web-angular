import {Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {Person} from "../../model/Person";

@Component({
  selector: 'formulaire',
  templateUrl: './formulaire.component.html',
  styleUrls: ['./formulaire.component.scss']
})
export class FormulaireComponent implements OnInit {
  @Input() employeModel: Person = {};
  @ViewChild("fileInput") fileInput!: ElementRef;

  @Output('cancel') cancelEvent$: EventEmitter<any>;
  @Output('submit') submitEvent$: EventEmitter<any>;

  constructor() {
    this.submitEvent$ = new EventEmitter();
    this.cancelEvent$ = new EventEmitter();
  }

  ngOnInit() {
    //VIDE
  }

  cancel() {
    this.cancelEvent$.emit();
  }

  submit(employe: Person) { //Formulaire
    debugger;
    this.submitEvent$.emit(employe);
  }
}
