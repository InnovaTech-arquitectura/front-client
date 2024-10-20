import { Component, OnInit } from '@angular/core';
import { Question } from 'src/app/model/question';
import { SupportService } from 'src/app/service/support.service';

@Component({
  selector: 'app-mis-preguntas',
  templateUrl: './mis-preguntas.component.html',
  styleUrls: ['./mis-preguntas.component.css']
})
export class MisPreguntasComponent implements OnInit {
  preguntas: Question[] = []; // Almacena las preguntas
  currentPage: number = 0; // Página actual
  pageSize: number = 5; // Tamaño de la página
  hasMoreQuestions: boolean = true; // Si hay más preguntas

  constructor(private supportService: SupportService) { }

  ngOnInit(): void {
    this.getPreguntas(); // Obtiene las preguntas al iniciar
  }

  getPreguntas(): void {
    this.supportService.getAllQuestions(this.currentPage, this.pageSize).subscribe(data => {
      this.preguntas = data; // Asigna la respuesta a la lista de preguntas

      // Verifica si hay más preguntas
      if (data.length < this.pageSize) {
        this.hasMoreQuestions = false; // No hay más preguntas
      } else {
        this.hasMoreQuestions = true; // Hay más preguntas
      }
    });
  }

  previousPage(): void {
    if (this.currentPage > 0) {
      this.currentPage--;
      this.getPreguntas(); // Obtiene preguntas de la página anterior
    }
  }

  nextPage(): void {
    if (this.hasMoreQuestions) {
      this.currentPage++;
      this.getPreguntas(); // Obtiene preguntas de la siguiente página
    }
  }
}
