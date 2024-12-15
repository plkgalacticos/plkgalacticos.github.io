import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import 'particlesjs'
declare var particlesJS: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit{

  constructor(private titleService: Title, private metaService: Meta) {}

  ngOnInit() {
    window.scrollTo(0, 1);
    this.titleService.setTitle('PLK Galacticos');

    this.metaService.updateTag({ name: 'description', content: "Naš klub je zajednica sportaša strastvenih za powerlifting. Težimo biti najjači i najtrofejniji powerlifting klub." });
    this.metaService.updateTag({ property: 'og:title', content: 'PLK Galacticos' });
    this.metaService.updateTag({ property: 'og:description', content: 'Naš klub je zajednica sportaša strastvenih za powerlifting. Težimo biti najjači i najtrofejniji powerlifting klub.' });
    this.metaService.updateTag({ property: 'og:image', content: 'assets/images/logo/logo-round.png' });
    this.metaService.updateTag({ property: 'og:image:width', content: '1024' });
    this.metaService.updateTag({ property: 'og:image:height', content: '675' });
  }

}

