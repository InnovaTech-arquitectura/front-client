import { Component } from '@angular/core';

@Component({
  selector: 'app-ver-pregunta',
  templateUrl: './ver-pregunta.component.html',
  styleUrls: ['./ver-pregunta.component.css']
})
export class VerPreguntaComponent {
  pregunta: string = '¿Cómo puedo acceder al módulo de Capacitación?';  // Pregunta obtenida de algún servicio
  respuesta: string = '';  // Respuesta, puede estar vacía si no ha sido respondida aún
}
