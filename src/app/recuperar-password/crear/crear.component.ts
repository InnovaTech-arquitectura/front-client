import { Component } from '@angular/core';
import { PasswordRecoveryService } from '../../service/PasswordRecoveryService'; // Asegúrate de importar el servicio correcto
import { Router } from '@angular/router';

@Component({
  selector: 'app-crear',
  templateUrl: './crear.component.html',
  styleUrls: ['./crear.component.css']
})
export class CrearComponent {
  newPassword: string = '';      // Variable para capturar la nueva contraseña
  confirmPassword: string = '';   // Variable para capturar la confirmación de la contraseña
  errorMessage: string = '';      // Para manejar errores
  successMessage: string = '';    // Para mostrar mensajes de éxito

  constructor(private passwordRecoveryService: PasswordRecoveryService, private router: Router) {}

  onSubmit(): void {
    // Verificar que ambas contraseñas coincidan
    if (this.newPassword !== this.confirmPassword) {
      this.errorMessage = 'Las contraseñas no coinciden. Intenta de nuevo.';
      return;
    }

    // Llamar al método del servicio para crear la nueva contraseña
    this.passwordRecoveryService.setNewPassword(this.newPassword, this.confirmPassword).subscribe(
      response => {
        //console.log('Contraseña cambiada con éxito:', response);
        this.successMessage = 'Contraseña creada correctamente. Puedes iniciar sesión ahora.'; // Mensaje de éxito
        // Redirigir al usuario al inicio de sesión después de un cambio exitoso
        this.router.navigate(['/inicio-sesion']);
      },
      error => {
        //console.error('Error al cambiar la contraseña:', error);
        this.errorMessage = 'Hubo un error al crear la nueva contraseña. Inténtalo nuevamente.'; // Manejo de errores
      }
    );
  }
}
