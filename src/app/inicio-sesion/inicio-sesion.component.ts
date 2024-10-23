import { Component } from '@angular/core';
import { Router } from '@angular/router'; // Importa Router para redirigir después del login
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-inicio-sesion',
  templateUrl: './inicio-sesion.component.html',
  styleUrls: ['./inicio-sesion.component.css']
})
export class InicioSesionComponent {
  email: string = '';
  password: string = '';
  isLoading: boolean = false; // Initialize isLoading to false

  constructor(private authService: AuthService, private router: Router) {} // Inyecta AuthService y Router

  onSubmit() {
    this.isLoading = true;

    this.authService.login(this.email, this.password).subscribe({
      next: (response) => {
        this.isLoading = false;
        console.log('Inicio de sesión exitoso:', response);
        
        // Redirigir a otra ruta, por ejemplo, el dashboard
        this.router.navigate(['/dashboard']);
      },
      error: (error) => {
        this.isLoading = false;
        console.error('Error en el inicio de sesión:', error);
        // Aquí puedes agregar lógica para manejar el error, como mostrar un mensaje al usuario
      }
    });
  }
}
