import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = environment.baseApiUrl; // Base URL para la API

  constructor(private http: HttpClient) {}

  // Método para el inicio de sesión
  login(email: string, password: string): Observable<string> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const body = JSON.stringify({ email, password });

    // Ajusta la URL para que apunte a la ruta de login
    return this.http.post(`${this.apiUrl}/api/Users/Login`, body, { headers, responseType: 'text' }).pipe(
      catchError(error => {
        console.error('Error en la solicitud:', error);
        return throwError(error);
      })
    );
  }

  // Método para registro de usuario
  register(name: string, documentNumber: string, email: string, password: string, userType: string): Observable<string> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const body = JSON.stringify({
      name,
      documentNumber,
      email,
      password,
      userType
    });

    // Ajusta la URL para que apunte a la ruta de registro
    return this.http.post(`${this.apiUrl}/api/Users/Register`, body, { headers, responseType: 'text' }).pipe(
      catchError(error => {
        console.error('Error en la solicitud:', error);
        return throwError(error);
      })
    );
  }
}
