import 'zone.js/dist/zone';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';
import { FacebookComponent } from './facebook/facebook.component';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule, FacebookComponent],
  template: `
  <app-facebook></app-facebook>
  `,
})
export class App {
  name = 'Angular';
}

bootstrapApplication(App);
