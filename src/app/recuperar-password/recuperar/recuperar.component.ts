import { Component } from '@angular/core';
import { PasswordRecoveryService } from '../../service/PasswordRecoveryService';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recuperar',
  templateUrl: './recuperar.component.html',
  styleUrls: ['./recuperar.component.css']
})
export class RecuperarComponent {
  email: string = ''; // Variable para capturar el email desde el formulario
  errorMessage: string = ''; // Para manejar errores
  successMessage: string = ''; // Para manejar mensajes de éxito

  constructor(private passwordRecoveryService: PasswordRecoveryService, private router: Router) {}
 
  onSubmit(): void {
    this.passwordRecoveryService.requestPasswordRecovery(this.email).subscribe(
      response => {
        console.log('Correo enviado con éxito:', response);
        this.successMessage = response.message; // Now it will display the JSON message
        this.router.navigate(['/recuperar-password/verificacion']);
      },
      error => {
        console.error('Error al enviar la solicitud:', error);
        if (error.status === 404) {
          this.errorMessage = 'El correo electrónico no está registrado. Intente nuevamente.';
        } else {
          this.errorMessage = 'Ocurrió un error al procesar la solicitud. Intente nuevamente más tarde.';
        }
      }
    );
  }
  
}
