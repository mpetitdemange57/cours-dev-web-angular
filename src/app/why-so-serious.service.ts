import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WhySoSeriousService {
  public name: string;

  constructor() {
    this.name = "Why So Serious ?"
  }

  getName() {
    return this.name;
  }
}
