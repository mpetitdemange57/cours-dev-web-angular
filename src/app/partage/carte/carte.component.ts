import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'carte',
  templateUrl: './carte.component.html',
  styleUrls: ['./carte.component.scss']
})
export class CarteComponent implements OnInit {
  @Input() person: any;
  @Output('personDelete') delete$: EventEmitter<any>;

  constructor() {
    this.person = {};
    this.delete$ = new EventEmitter();
  }

  ngOnInit(): void {}

  /**
   * Function to emit event to delete current person
   *
   * @param person
   */
  delete(person: any) {
    this.delete$.emit(person);
  }


}
