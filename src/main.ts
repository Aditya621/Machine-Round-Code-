import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { RestroMenuComponent } from './Component/restroMenu.component';

@Component({
  selector: 'app-root',
  imports: [RestroMenuComponent],
  template: `
    <app-restro-menu></app-restro-menu>
  `,
})
export class App {
  name = 'Angular';
}

bootstrapApplication(App);
