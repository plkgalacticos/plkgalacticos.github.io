import { Component } from '@angular/core';
import { Athlete } from '../../models/member';
import { members } from '../../models/members_data';
import { Observable, of, Subscription } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrl: './members.component.scss'
})
export class MembersComponent {
  currentMember!: Athlete;
  allMembers: Athlete[] = members

  // changes with internationalization
  category$!: Observable<string>;
  description$!: Observable<string>;
  nickname$!: Observable<string>;

  private langChangeSubscription!: Subscription;

  constructor(private translate: TranslateService) {}

  ngOnInit(): void {
    window.scrollTo(0, 1);

    this.updateText(this.translate.currentLang);  // Initialize text based on the current language

    // Subscribe to language change events
    this.langChangeSubscription = this.translate.onLangChange.subscribe(event => {
      this.updateText(event.lang);  // Update text whenever the language changes
    });
  }

  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    if(this.translate.currentLang)
      this.updateText(this.translate.currentLang)
    else
      this.updateText(this.translate.defaultLang)
  }

  setCurrentMember(index:number) {
    this.currentMember = members[index]
    this.updateText(this.translate.currentLang || this.translate.defaultLang)
    window.scrollTo(0,1)
  }

  private updateText(lang: string) {
    if (lang === 'en') {
      this.category$ = of(this.currentMember.category_en);
      this.description$ = of(this.currentMember.description_en)
      this.nickname$ = of(this.currentMember.nickname_en)
    } else if (lang === 'hr') {
      this.category$ = of(this.currentMember.category);
      this.description$ = of(this.currentMember.description)
      this.nickname$ = of(this.currentMember.nickname)
    }
  }





}
