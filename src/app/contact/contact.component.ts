import { Component, OnInit } from '@angular/core';
import languages from "./languages.json";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  public languages: any = languages;

  constructor() { }

  ngOnInit(): void {
  }

}
