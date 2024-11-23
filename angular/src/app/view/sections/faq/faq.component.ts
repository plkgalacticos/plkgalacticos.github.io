import { Component, ElementRef, Input, QueryList, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrl: './faq.component.scss'
})
export class FaqComponent {

  isActive = [false,false,false,false,false,false,false,false,false,false,false];
  isInView: boolean[] = []; // Array to store visibility for each div
  hasBeenInView: boolean[] = []; // Track if it has ever been in view

  @ViewChildren('trackView') trackDivs!: QueryList<ElementRef>;

  private observer!: IntersectionObserver;

  ngOnInit(): void {
    this.initializeObserver();
  }

  toggleClass(idx: number) {
    this.isActive[idx] = !this.isActive[idx];
  }

  initializeObserver() {
    // Initialize the IntersectionObserver with a callback
    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = Number(entry.target.getAttribute('data-index')); // Get the div index
          if (!this.hasBeenInView[index] && entry.isIntersecting) {
            this.isInView[index] = true; // Set visibility to true
            this.hasBeenInView[index] = true; // Mark as having been in view
          }
        });
      },
      {
        threshold: 0.5 // Adjust this threshold as needed
      }
    );
  }

  ngAfterViewInit(): void {
    // Observe each div
    this.trackDivs.forEach((div, index) => {
      this.isInView[index] = false; // Set initial visibility to false
      this.hasBeenInView[index] = false; // Initially, hasn't been in view
      div.nativeElement.setAttribute('data-index', index.toString()); // Set a unique index
      this.observer.observe(div.nativeElement);
    });
  }

  ngOnDestroy(): void {
    // Disconnect the observer on component destroy
    if (this.observer) {
      this.observer.disconnect();
    }
  }
}
