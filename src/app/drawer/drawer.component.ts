import {Component, OnInit, ViewChild} from '@angular/core';
import {MatDrawer} from "@angular/material/sidenav";

@Component({
  selector: 'app-drawer',
  templateUrl: './drawer.component.html',
  styleUrls: ['./drawer.component.scss']
})
export class DrawerComponent implements OnInit {

  @ViewChild(MatDrawer) drawer!: MatDrawer;

  constructor() { }

  ngOnInit(): void {
  }

  public toggleDrawer():void {
    this.drawer.toggle();
  }

}
