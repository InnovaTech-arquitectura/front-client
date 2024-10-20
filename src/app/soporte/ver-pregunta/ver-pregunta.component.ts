import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SupportService } from 'src/app/service/support.service';
import { Question } from 'src/app/model/question';

@Component({
  selector: 'app-ver-pregunta',
  templateUrl: './ver-pregunta.component.html',
  styleUrls: ['./ver-pregunta.component.css']
})
export class VerPreguntaComponent implements OnInit {
  pregunta: string = '';  // La pregunta que se mostrará
  respuesta: string = '';  // Respuesta, puede estar vacía si no ha sido respondida aún
  preguntas: Question[] = []; // Almacena todas las preguntas

  constructor(private route: ActivatedRoute, private supportService: SupportService) { }

  ngOnInit(): void {
    this.getPreguntas(); // Obtiene todas las preguntas al iniciar
  }

  getPreguntas(): void {
    this.supportService.getAllQuestions(0, 100).subscribe(data => { // Obtener todas las preguntas, puedes ajustar el tamaño
      this.preguntas = data; // Asigna la respuesta a la lista de preguntas
      const preguntaId = this.route.snapshot.paramMap.get('id'); // Obtén el ID de la ruta
      this.getPregunta(preguntaId); // Busca la pregunta con el ID
    });
  }

  getPregunta(id: string | null): void {
    const foundQuestion = this.preguntas.find(q => q.id === Number(id)); // Busca la pregunta por ID
    if (foundQuestion) {
      this.pregunta = foundQuestion.question;
      this.respuesta = foundQuestion.answer || 'Esperando respuesta...'; // Muestra respuesta o texto por defecto
    }
  }
}
