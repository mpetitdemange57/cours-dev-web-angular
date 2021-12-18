import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'carte',
  templateUrl: './carte.component.html',
  styleUrls: ['./carte.component.scss']
})
export class CarteComponent implements OnInit {
  @Input() employee: any;
  @Output('personDelete') delete$: EventEmitter<any>;

  constructor() {
    this.employee = {};
    this.delete$ = new EventEmitter();
  }

  ngOnInit(): void {
    //Methode vide
  }

  /**
   * Function to emit event to delete current person
   *
   * @param person
   */
  delete(person: any) {
    this.delete$.emit(this.employee);
  }


}
