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
  // Método para el registro de clientes
  registerClient(name: string, documentNumber: number, email: string, password: string): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const body = {
      name: name,
      id_card: documentNumber,
      email: email,
      password: password,
      userName: name,
      roleName: "Client"
    };

    return this.http.post<any>(`${this.apiUrl}/api/Client/Register`, body, { headers }).pipe(
      catchError(error => {
        const errorMsg = error?.error?.message || 'Hubo un problema al registrar el usuario.';
        console.error('Registration request error:', error);
        return throwError(errorMsg);
      })
    );
  }

  registerEntrepreneur(
    name: string,
    names: string,
    lastNames: string,
    email: string,
    password: string,
    documentNumber: number,
    userName: string,
    nameEntrepreneurship: string,
    description: string
  ): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const body = {
      name: name,
      names: names,
      lastNames: lastNames,
      email: email,
      password: password,
      id_card: documentNumber,
      userName: userName,
      nameEntrepreneurship: nameEntrepreneurship,
      description: description,
      roleName: 'Entrepreneurship'
    };

    return this.http.post<any>(`${this.apiUrl}/api/Entrepreneurship/Register`, body, { headers }).pipe(
      catchError(error => {
        const errorMsg = error?.error?.message || 'Hubo un problema al registrar el emprendimiento.';
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
