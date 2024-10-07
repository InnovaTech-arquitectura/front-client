import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header-client',
  templateUrl: './header-client.component.html',
  styleUrls: ['./header-client.component.css']
})
export class HeaderClientComponent {
  constructor(private router: Router) {}

  logout() {
    // Elimina el token del almacenamiento local
    localStorage.removeItem('token');
    // Redirige al usuario a la página de inicio de sesión
    this.router.navigate(['/login']);
  }

  market() {
    this.router.navigate(['/servicios']);
  }

  profile() {
    this.router.navigate(['/datos']);
  }
}
