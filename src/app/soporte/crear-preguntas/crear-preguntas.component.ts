import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-crear-preguntas',
  templateUrl: './crear-preguntas.component.html',
  styleUrls: ['./crear-preguntas.component.css']
})
export class CrearPreguntasComponent {
  pregunta: string = '';  // Almacena la pregunta que el usuario ingresa

  constructor(private http: HttpClient) { }

  enviarPregunta(): void {
    // Llamada a la API para enviar la pregunta
    this.http.post('URL_DE_TU_API/crearPregunta', { pregunta: this.pregunta })
      .subscribe(response => {
        console.log('Pregunta enviada', response);
        // Aquí puedes manejar alguna notificación o limpieza del campo tras enviar la pregunta
        this.pregunta = '';
      });
  }
}
