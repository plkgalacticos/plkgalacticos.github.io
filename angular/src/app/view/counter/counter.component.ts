import { AfterViewInit, Component, ElementRef, Input, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.scss'
})
export class CounterComponent implements AfterViewInit, OnDestroy{
  @Input() targetValue: number = 0; // The value x to count to
  @Input() startValue: number = 0;
  currentValue: number = 0; // The displayed counter value

  timer!: ReturnType<typeof setInterval>;

  constructor(private el: ElementRef) {}

  ngAfterViewInit() {
    let observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.animateValue(this.targetValue);
          observer.unobserve(entry.target); // Stop observing once animation starts
        }
      });
    }, { threshold: 0.2 }); // Adjust threshold as needed

    observer.observe(this.el.nativeElement);
  }

  animateValue(target: number, duration: number = 800) {
    const start = this.startValue;
    const end = target;
    let current = start;
    const stepTime = duration / target; // Calculate the time between steps

    this.timer = setInterval(() => {
      current += 1; // Increment the value
      this.currentValue = current; // Update the displayed value

      if (current >= end) {
        clearInterval(this.timer); // Stop the timer when the end is reached
      }
    }, stepTime);
  }

  ngOnDestroy(): void {
    clearInterval(this.timer);
  }
}
