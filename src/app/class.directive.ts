import {Directive, ElementRef} from '@angular/core';

@Directive({
  selector: '[appClassDirective="test"]'
})
export class ClassDirective {

  constructor(private el:ElementRef) {
    this.el.nativeElement.textContent = "Ca c'est la class ! ";
  }
}
