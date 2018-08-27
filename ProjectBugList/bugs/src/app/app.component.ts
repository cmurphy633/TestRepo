import { Component } from '@angular/core';

@Component({
  selector: 'pm-root',
  template: `
  <nav class='navbar navbar-expand navbar-light bg-light'>
    <a class='navbar-brand'>{{pageTitle}}</a>
    <ul class='nav nav-pills'>
      <li><a class='nav-link' [routerLink]="['/home']">Home Screen</a></li>
      <li><a class='nav-link' [routerLink]="['/bugs']">Bugs</a></li>
      <li><a class='nav-link' [routerLink]="['/users']">Users</a></li>
    </ul>
  </nav>
    <div class='container' style="width:100%;">
      <router-outlet></router-outlet>
    </div>
  `
})

export class AppComponent {
  pageTitle = 'Randox Bug Management';
}



