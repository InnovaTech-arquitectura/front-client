// inicio-sesion.component.ts
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-inicio-sesion',
  templateUrl: './inicio-sesion.component.html',
  styleUrls: ['./inicio-sesion.component.css']
})
export class InicioSesionComponent {
  email: string = '';
  password: string = '';
  isLoading: boolean = false;
  userType: number = 0;

  constructor(private authService: AuthService, private router: Router) {}

  onSubmit() {
    this.isLoading = true;

    this.authService.login(this.email, this.password).subscribe({
      next: (response) => {
        this.isLoading = false;
        
        // Guardar el token y el userId en el localStorage
        localStorage.setItem('token', response.token);
        localStorage.setItem('userId', response.userId);

        // Redirigir a otra ruta, por ejemplo, el dashboard
        if(this.userType == 1)
          this.router.navigate(['/dashboard']);
        else
          this.router.navigate(['/productos']);
      },
      error: (error) => {
        this.isLoading = false;
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
