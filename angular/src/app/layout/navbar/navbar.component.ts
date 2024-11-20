import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

  siteLanguage = new FormControl('en');
  languageList = [
    { code: 'en', label: 'EN' },
    { code: 'hr', label: 'HR' },
  ];

  constructor(private translate: TranslateService) {
    this.siteLanguage.setValue(translate.defaultLang);
    this.translate.use(this.siteLanguage.getRawValue() || '');
   }

  changeSiteLanguage(event: any): void {
    const localeCode = event.target.value
    const selectedLanguage = this.languageList
      .find((language) => language.code === localeCode)
      ?.label.toString();
    if (selectedLanguage) {
      this.siteLanguage.setValue(selectedLanguage);
      this.translate.use(localeCode);
    }
    const currentLanguage = this.translate.currentLang;
  }

  navSlide() {
    const burger = document.querySelector(".burger");
    const navContent = document.querySelector(".nav-links-mobile");

    burger?.classList.toggle("toggle");
    navContent?.classList.toggle("toggle-nav-content");
  }
}
