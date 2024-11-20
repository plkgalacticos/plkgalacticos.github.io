import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CountdownService } from '../../../services/countdown.service';

@Component({
  selector: 'app-countdown',
  templateUrl: './countdown.component.html',
  styleUrls: ['./countdown.component.scss']
})
export class CountdownComponent implements OnInit {
  countdown$!: Observable<string>;

  constructor(private countdownService: CountdownService) { }

  ngOnInit() {
    const targetDate = new Date("2025-03-07"); // Set your target date here
    this.countdown$ = this.countdownService.getCountdown(targetDate);
  }
}
