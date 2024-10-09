import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  navSlide() {
    const burger = document.querySelector(".burger");
    const navContent = document.querySelector(".nav-links-mobile");

    burger?.classList.toggle("toggle");
    navContent?.classList.toggle("toggle-nav-content");
  }
}
