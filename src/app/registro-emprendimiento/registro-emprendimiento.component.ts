// registroEmprendimiento.component.ts
import { Component } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register-entrepreneurship',
  templateUrl: './registro-emprendimiento.component.html',
  styleUrls: ['./registro-emprendimiento.component.css']
})
export class RegistroEmprendimientoComponent {
  name: string = '';
  names: string = '';
  lastNames: string = '';
  email: string = '';
  password: string = '';
  confirmPassword: string = '';
  documentNumber: number | null = null;
  userName: string = '';
  nameEntrepreneurship: string = '';
  description: string = '';
  isLoading: boolean = false;

  constructor(private authService: AuthService, private router: Router) {}

  onSubmit() {
    // Verificación de campos requeridos
    if (
      !this.name ||
      !this.names ||
      !this.lastNames ||
      !this.email ||
      !this.password ||
      !this.confirmPassword ||
      this.documentNumber === null ||
      !this.userName ||
      !this.nameEntrepreneurship ||
      !this.description
    ) {
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

    // Llama al servicio para registrar emprendimiento
    this.authService.registerEntrepreneur(
      this.name,
      this.names,
      this.lastNames,
      this.email,
      this.password,
      this.documentNumber,
      this.userName,
      this.nameEntrepreneurship,
      this.description
    )
      .subscribe({
        next: (response) => {
          Swal.fire({
            icon: 'success',
            title: 'Registro exitoso',
            text: 'Emprendimiento registrado correctamente.',
            confirmButtonText: 'Aceptar'
          }).then(() => {
            this.router.navigate(['/login']);
          });
          this.isLoading = false;
        },
        error: (error) => {
          const errorMsg = error?.error || 'Hubo un problema al registrar el emprendimiento. Intenta nuevamente.';
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
