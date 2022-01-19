import {Component, ViewChild} from '@angular/core';
import {MatDrawer} from "@angular/material/sidenav";

@Component({
  selector: 'drawer',
  templateUrl: './drawer.component.html',
  styleUrls: ['./drawer.component.scss']
})
export class DrawerComponent {

  @ViewChild(MatDrawer) drawer!: MatDrawer;

  constructor() {
    //Vide
  }

  public toggleDrawer():void {
    this.drawer.toggle();
  }

}
