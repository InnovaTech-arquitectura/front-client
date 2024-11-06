import { Component } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent {
  name: string = '';
  documentNumber: number; 
  email: string = '';
  password: string = '';
  confirmPassword: string = '';
  userType: string = ''; // Inicializado vacío
  isLoading: boolean = false;

  constructor(private authService: AuthService, private router: Router) {}

  onSubmit() {
    // Verificación de campos requeridos
    if (!this.name || this.documentNumber === null || !this.email || !this.password || !this.confirmPassword || this.userType === '--') {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Por favor, completa todos los campos.',
        confirmButtonText: 'Aceptar'
      });
      return;
    }

    // Verificación de coincidencia de contraseñas
    if (this.password !== this.confirmPassword) {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Las contraseñas no coinciden. Por favor, intenta de nuevo.',
        confirmButtonText: 'Aceptar'
      });
      return;
    }

    this.isLoading = true;

    // Llama al servicio de registro con el tipo de usuario dinámico
    this.authService.register(this.name, this.documentNumber, this.email, this.password, this.userType)
      .subscribe({
        next: (response) => {
          Swal.fire({
            icon: 'success',
            title: 'Registro exitoso',
            text: 'Usuario registrado correctamente.',
            confirmButtonText: 'Aceptar'
          }).then(() => {
            this.router.navigate(['/login']);
          });
          this.isLoading = false;
        },
        error: (error) => {
          const errorMsg = error?.error || 'Hubo un problema al registrar el usuario. Intenta nuevamente.';
          Swal.fire({
            icon: 'error',
            title: 'Error',
            text: errorMsg,
            confirmButtonText: 'Aceptar'
          });
          this.isLoading = false;
        }
      });
  }
}
