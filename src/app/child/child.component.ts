import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent {
  @Output()
  childEvent: EventEmitter<string>;
  constructor() {
    this.childEvent = new EventEmitter<string>();
  }
  raiseEvent(){
    this.childEvent.emit("event from child");
  }
}
