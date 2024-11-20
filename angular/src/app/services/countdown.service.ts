import { Injectable } from '@angular/core';
import { Observable, timer } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class CountdownService {

  constructor() { }

  getCountdown(targetDate: Date): Observable<string> {
    return timer(0, 1000).pipe(
      map(() => {
        const now = new Date();
        const difference = targetDate.getTime() - now.getTime();

        if (difference < 0) {
          return "0m 0d 00h 00m 00s";
        }

        const months = Math.floor(difference / (1000 * 60 * 60 * 24 * 30));
        const days = Math.floor((difference / (1000 * 60 * 60 * 24)) % 30);
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((difference / (1000 * 60)) % 60);
        const seconds = Math.floor((difference / 1000) % 60);

        return `${months} months ${days} days ${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
      }),
      startWith("Calculating...")
    );
  }
}
