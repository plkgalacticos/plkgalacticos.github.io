import { Component, ElementRef, QueryList, ViewChildren } from '@angular/core';

declare var particlesJS: any;
declare var Swal: any;

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent {
  isInView: boolean[] = []; // Array to store visibility for each div

  @ViewChildren('trackView') trackDivs!: QueryList<ElementRef>;

  private observer!: IntersectionObserver;

  ngOnInit(): void {
    this.initializeObserver();
    particlesJS.load('particles-js', 'assets/particles.json', function() {
      console.log('callback - particles.js config loaded');
    });

    particlesJS.load('particles-js', '../../assets/particles.json', null);
  }

  initializeObserver() {
    // Initialize the IntersectionObserver with a callback
    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = Number(entry.target.getAttribute('data-index')); // Get the div index
          this.isInView[index] = entry.isIntersecting; // Set visibility based on intersection
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
