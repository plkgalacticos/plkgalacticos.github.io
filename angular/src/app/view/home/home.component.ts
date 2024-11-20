import { Component } from '@angular/core';
import 'particlesjs'
declare var particlesJS: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent{

  // ngOnInit(): void {
  //   //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
  //   //Add 'implements OnInit' to the class.
  //   particlesJS.load('particles-js', 'assets/particles.json', function() {
  //     console.log('callback - particles.js config loaded');
  //   });

  //   particlesJS.load('particles-js', '../../assets/particles.json', null);
  // }
}

