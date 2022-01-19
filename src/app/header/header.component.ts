import {Component, Input} from '@angular/core';
import {DrawerComponent} from "../drawer/drawer.component";

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  @Input() drawer!: DrawerComponent;

  constructor() {
    //Vide
  }

}
