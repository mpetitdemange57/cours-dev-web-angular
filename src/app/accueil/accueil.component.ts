import {Component, ElementRef, ViewChild} from '@angular/core';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.scss']
})
  export class AccueilComponent {
    @ViewChild('someInput') someInput: ElementRef | undefined;

    ngAfterViewInit() {
      this.someInput!.nativeElement.value = 'Yoda !';
    }
}
