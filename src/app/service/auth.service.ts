// auth.service.ts
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

  // Método para el registro
  register(name: string, documentNumber: number, email: string, password: string, userType: string): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const body = {
      name: name,
      id_card: documentNumber, // Asegúrate de que este valor sea un número
      email: email,
      password: password,
      userName: name,
      roleName: userType
    };
  
    return this.http.post<any>(`${this.apiUrl}/api/Users/Register`, body, { headers }).pipe(
      catchError(error => {
        const errorMsg = error?.error?.message || 'Hubo un problema al registrar el usuario.';
        console.error('Registration request error:', error);
        return throwError(errorMsg);
      })
    );
  }

  // Método para el inicio de sesión
  login(email: string, password: string): Observable<{ isSuccess: boolean, token: string, userId: string }> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const body = JSON.stringify({ email, password });

    return this.http.post<{ isSuccess: boolean, token: string, userId: string }>(`${this.apiUrl}/api/Users/Login`, body, { headers }).pipe(
      catchError(error => {
        console.error('Error en la solicitud de inicio de sesión:', error);
        return throwError(error);
      })
    );
  }
}
