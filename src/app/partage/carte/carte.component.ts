import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Person} from "../service/list-personnel.service";

@Component({
  selector: 'carte',
  templateUrl: './carte.component.html',
  styleUrls: ['./carte.component.scss']
})
export class CarteComponent {

  @Input() employe: Person;

  @Output('personDelete') delete$: EventEmitter<any> = new EventEmitter();

  @Output('personUpdate') update$: EventEmitter<any> = new EventEmitter();

  showButton: boolean = false;

  constructor() {
    this.employe = {};
  }

  delete() {
    this.delete$.emit(this.employe);
  }

  update() {
    this.update$.emit(this.employe);
  }

}
