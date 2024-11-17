import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Question } from '../model/question';

@Injectable({
  providedIn: 'root'
})
export class SupportService {
  private apiUrl = environment.baseApiUrl + '/support'; 

  constructor(private http: HttpClient) { }

  private getHeaders(): HttpHeaders {
    const token = localStorage.getItem('token'); // Obtén el token del almacenamiento local
    return new HttpHeaders().set('Authorization', `Bearer ${token}`);
  }

  // Método para obtener preguntas con paginación
  getAllQuestions(page: number, size: number): Observable<Question[]> {
    const headers = this.getHeaders();
    return this.http.get<Question[]>(`${this.apiUrl}/questions?page=${page}&size=${size}`, { headers });
  }

  // Método para obtener el conteo total de preguntas
  getQuestionsCount(): Observable<number> {
    const headers = this.getHeaders();
    return this.http.get<number>(`${this.apiUrl}/questions/count`, { headers });
  }

  // Método para crear una nueva pregunta
  createQuestion(question: Question): Observable<Question> {
    const headers = this.getHeaders();
    return this.http.post<Question>(`${this.apiUrl}/questions`, question, { headers });
  }
}
