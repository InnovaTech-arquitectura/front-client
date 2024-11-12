import { Component } from '@angular/core';
import { Question } from 'src/app/model/question';
import { SupportService } from 'src/app/service/support.service';
import { Router } from '@angular/router'; // Importa Router

@Component({
  selector: 'app-crear-preguntas',
  templateUrl: './crear-preguntas.component.html',
  styleUrls: ['./crear-preguntas.component.css']
})
export class CrearPreguntasComponent {
  pregunta: string = '';  // Almacena la pregunta que el usuario ingresa
  business: string = 'default_business'; // Cambia esto según tu lógica

  constructor(private supportService: SupportService, private router: Router) { } // Inyecta Router

  enviarPregunta(): void {
    const newQuestion: Question = { question: this.pregunta, answer: null, business: this.business };
    this.supportService.createQuestion(newQuestion).subscribe(response => {
      //console.log('Pregunta enviada', response);
      this.pregunta = ''; // Limpia el campo después de enviar

      // Redirige a la página de Mis Preguntas
      this.router.navigate(['/soporte']); // Redirección a /soporte
    });
  }
}
