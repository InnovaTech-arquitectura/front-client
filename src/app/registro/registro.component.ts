import { Component } from '@angular/core';
import { AuthService } from '../service/auth.service'; // Ajusta la ruta según tu estructura de carpetas
import { Router } from '@angular/router'; // Importa el Router
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent {
  name: string = '';
  documentNumber: string = '';
  email: string = '';
  password: string = '';
  confirmPassword: string = '';
  userType: string = ''; // Inicializado vacío
  isLoading: boolean = false;

  constructor(private authService: AuthService, private router: Router) {} // Agrega el Router al constructor

  onSubmit() {
    // Verifica si se ha seleccionado un tipo de usuario diferente a ''
    if (this.userType === '') {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Por favor, completa todos los campos.',
        confirmButtonText: 'Aceptar'
      });
      return; // Evita el envío del formulario
    }

    // Verifica si las contraseñas coinciden
    if (this.password !== this.confirmPassword) {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Las contraseñas no coinciden. Por favor, intenta de nuevo.',
        confirmButtonText: 'Aceptar'
      });
      return; // Evita el envío del formulario
    }

    this.isLoading = true;

    // Llama al método de registro de tu AuthService
    this.authService.register(this.name, this.documentNumber, this.email, this.password, this.userType)
      .subscribe({
        next: (response) => {
          Swal.fire({
            icon: 'success',
            title: 'Registro exitoso',
            text: response,
            confirmButtonText: 'Aceptar'
          }).then(() => {
            // Redirige al usuario a la página de inicio de sesión
            this.router.navigate(['/login']); // Asegúrate de que la ruta sea correcta
          });
          this.isLoading = false;
        },
        error: (error) => {
          Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Hubo un problema al registrar el usuario, intenta nuevamente.',
            confirmButtonText: 'Aceptar'
          });
          this.isLoading = false;
        }
      });
  }
}
