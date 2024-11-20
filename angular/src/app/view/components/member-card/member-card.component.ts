import { Component, Input } from '@angular/core';
import { Athlete } from '../../../models/member';

@Component({
  selector: 'app-member-card',
  templateUrl: './member-card.component.html',
  styleUrl: './member-card.component.scss'
})
export class MemberCardComponent {
  @Input() member!: Athlete;
  @Input() isCurrent!: boolean;
}
