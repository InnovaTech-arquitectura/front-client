import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Question } from '../model/question';

@Injectable({
  providedIn: 'root'
})
export class SupportService {
  private apiUrl = environment.baseApiUrl + '/support'; 

  constructor(private http: HttpClient) { }

  // Método para obtener preguntas con paginación
  getAllQuestions(page: number, size: number): Observable<Question[]> {
    return this.http.get<Question[]>(`${this.apiUrl}/questions?page=${page}&size=${size}`);
  }

  // Método para obtener el conteo total de preguntas
  getQuestionsCount(): Observable<number> {
    return this.http.get<number>(`${this.apiUrl}/questions/count`);
  }

  // Método para crear una nueva pregunta
  createQuestion(question: Question): Observable<Question> {
    return this.http.post<Question>(`${this.apiUrl}/questions`, question);
  }
}
