import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {MatDrawer} from "@angular/material/sidenav";
import {DrawerComponent} from "../drawer/drawer.component";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  // @ViewChild('chartContainer', { read: MatDrawer }) drawer!:MatDrawer;
  @Input() drawer!: DrawerComponent;

  constructor() { }

  ngOnInit(): void {
  }

  public toggleDrawer():void{
    this.drawer.toggleDrawer();
  }

}
