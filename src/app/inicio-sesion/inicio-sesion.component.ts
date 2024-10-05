import { Component } from '@angular/core';
import { AuthService } from '../service/auth.service'; // Ajusta la ruta según la ubicación real
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio-sesion',
  templateUrl: './inicio-sesion.component.html',
  styleUrls: ['./inicio-sesion.component.css']
})
export class InicioSesionComponent {
  email: string = ''; // Propiedad para el email
  password: string = ''; // Propiedad para la contraseña

  constructor(
    private authService: AuthService, // Inyectar AuthService
    private router: Router // Inyectar Router
  ) {}

  onSubmit() {
    this.authService.login(this.email, this.password).subscribe(
      response => {
        console.log('Inicio de sesión exitoso:', response);
        // Almacena el token directamente
        localStorage.setItem('token', response);
        this.router.navigate(['/publicidad']); // Redirigir a /publicidad
      },
      error => {
        console.error('Error al iniciar sesión:', error);
      }
    );
  }  
  goToForgotPassword() {
    this.router.navigate(['recuperar-password/recuperar']).catch(err => {
      console.error('Navigation error:', err);
    });
  }
 
  
}
