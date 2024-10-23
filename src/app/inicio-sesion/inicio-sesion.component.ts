import { Component } from '@angular/core';
import { Router } from '@angular/router'; // Importa Router para redirigir después del login
import { AuthService } from '../service/auth.service';
import Swal from 'sweetalert2'; // Importa SweetAlert2 para las alertas

@Component({
  selector: 'app-inicio-sesion',
  templateUrl: './inicio-sesion.component.html',
  styleUrls: ['./inicio-sesion.component.css']
})
export class InicioSesionComponent {
  email: string = '';
  password: string = '';
  isLoading: boolean = false; // Inicializa isLoading en falso

  constructor(private authService: AuthService, private router: Router) {} // Inyecta AuthService y Router

  onSubmit() {
    this.isLoading = true; // Mostrar el spinner al iniciar sesión

    this.authService.login(this.email, this.password).subscribe({
      next: (response) => {
        this.isLoading = false; // Ocultar el spinner
        console.log('Inicio de sesión exitoso:', response);
        
        // Guardar el token en el localStorage
        localStorage.setItem('token', response);
        
        // Redirigir a otra ruta, por ejemplo, el dashboard
        this.router.navigate(['/dashboard']);
      },
      error: (error) => {
        this.isLoading = false; // Ocultar el spinner en caso de error
        console.error('Error en el inicio de sesión:', error);

        // Mostrar una alerta de error con SweetAlert2
        Swal.fire({
          icon: 'error',
          title: 'Error de autenticación',
          text: 'No pudimos iniciar sesión. Por favor, verifica tus credenciales.',
          confirmButtonText: 'Cerrar'
        });
      }
    });
  }
}
