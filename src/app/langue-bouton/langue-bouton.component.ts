import {Component} from '@angular/core';
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'langue-bouton',
  templateUrl: './langue-bouton.component.html',
  styleUrls: ['./langue-bouton.component.scss']
})
export class LangueBoutonComponent {

  constructor(private translate: TranslateService) { }

  useLanguage(language: string): void {
    this.translate.use(language);
  }

}
