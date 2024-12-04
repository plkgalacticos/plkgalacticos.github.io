import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'plk-galacticos';

  constructor(private titleService: Title, private metaService: Meta) {}

  ngOnInit() {
    this.titleService.setTitle('Galacticos');

    this.metaService.updateTag({ name: 'description', content: "Naš klub je zajednica sportaša strastvenih za powerlifting. Težimo biti najjači i najtrofejniji klub." });
    this.metaService.updateTag({ property: 'og:title', content: 'Galacticos' });
    this.metaService.updateTag({ property: 'og:description', content: 'Naš klub je zajednica sportaša strastvenih za powerlifting. Težimo biti najjači i najtrofejniji klub.' });
    this.metaService.updateTag({ property: 'og:image', content: 'assets/images/logo/logo-round.png' });
    this.metaService.updateTag({ property: 'og:image:width', content: '1024' });
    this.metaService.updateTag({ property: 'og:image:height', content: '675' });
  }
}
