import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'http://localhost:5293/api';  // URL base del backend

  constructor(private http: HttpClient) {}

  // Método para hacer una solicitud GET
  getData(): Observable<any> {
    return this.http.get(`${this.apiUrl}/endpoint`); // Ajusta el endpoint según tu API
  }

  // Método para hacer una solicitud POST
  postData(data: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/endpoint`, data);
  }
}
