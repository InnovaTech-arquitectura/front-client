import { Component } from '@angular/core';
import { PasswordRecoveryService } from '../../service/PasswordRecoveryService'; // Asegúrate de importar el servicio correcto
import { Router } from '@angular/router';

@Component({
  selector: 'app-verificacion',
  templateUrl: './verificacion.component.html',
  styleUrls: ['./verificacion.component.css']
})
export class VerificacionComponent {
  code: string = '';  // Variable para capturar el código desde el formulario
  errorMessage: string = ''; // Para manejar errores
  successMessage: string = ''; // Para mostrar mensajes de éxito

  constructor(private passwordRecoveryService: PasswordRecoveryService, private router: Router) {}
 
  onSubmit(): void {
    // Llamar al método del servicio para verificar el código
    this.passwordRecoveryService.requestVerificationCode(this.code).subscribe(
      response => {
        console.log('Código verificado con éxito:', response);
        this.successMessage = 'Código verificado correctamente. Puedes continuar.'; // Mensaje de éxito
        // Redirigir al componente correspondiente después de la verificación exitosa
        this.router.navigate(['/recuperar-password/crear']);
      },
      error => {
        console.error('Error al verificar el código:', error);
        this.errorMessage = 'El código ingresado es incorrecto. Inténtalo nuevamente.'; // Manejo de errores
      }
    );
  }
}
