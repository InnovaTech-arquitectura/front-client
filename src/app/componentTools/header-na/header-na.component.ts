import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header-na',
  templateUrl: './header-na.component.html',
  styleUrls: ['./header-na.component.css']
})
export class HeaderNaComponent {
  constructor(private router: Router) {}

  logout() {
    this.router.navigate(['/login']);
  }

  market() {
    this.router.navigate(['/']);
  }
}
