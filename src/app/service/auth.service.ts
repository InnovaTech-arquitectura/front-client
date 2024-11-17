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
  private secretKey = 'mySecretKey12345';  // Clave secreta (debe coincidir con la del backend)

  constructor(private http: HttpClient) {}

  // Método para el registro de clientes
  registerClient(name: string, documentNumber: number, email: string, password: string): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    // Ciframos la contraseña antes de enviarla
    const encryptedPassword = this.encrypt(password);

    const body = {
      name: name,
      id_card: documentNumber,
      email: email,
      password: encryptedPassword,  // Contraseña cifrada
      userName: name,
      roleName: "Client"
    };

    return this.http.post<any>(`${this.apiUrl}/api/Client/Register`, body, { headers }).pipe(
      catchError(error => {
        const errorMsg = error?.error?.message || 'Hubo un problema al registrar el usuario.';
        return throwError(errorMsg);
      })
    );
  }

  // Método para el registro de emprendedores
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

    // Ciframos la contraseña antes de enviarla
    const encryptedPassword = this.encrypt(password);

    const body = {
      name: name,
      names: names,
      lastNames: lastNames,
      email: email,
      password: encryptedPassword,  // Contraseña cifrada
      id_card: documentNumber,
      userName: userName,
      nameEntrepreneurship: nameEntrepreneurship,
      description: description,
      roleName: 'Entrepreneurship'
    };

    return this.http.post<any>(`${this.apiUrl}/api/Entrepreneurship/Register`, body, { headers }).pipe(
      catchError(error => {
        const errorMsg = error?.error?.message || 'Hubo un problema al registrar el emprendimiento.';
        return throwError(errorMsg);
      })
    );
  }

  // Método para el inicio de sesión
  login(email: string, password: string): Observable<{ isSuccess: boolean, token: string, userId: string, role: string }> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    // Ciframos la contraseña antes de enviarla
    const encryptedPassword = this.encrypt(password);

    const body = JSON.stringify({ email, password: encryptedPassword });

    return this.http.post<{ isSuccess: boolean, token: string, userId: string, role: string }>(`${this.apiUrl}/api/Users/Login`, body, { headers }).pipe(
      catchError(error => {
        return throwError(error);
      })
    );
  }

  // Función de cifrado XOR
  private encrypt(password: string): string {
    let encrypted = '';
    for (let i = 0; i < password.length; i++) {
      encrypted += String.fromCharCode(password.charCodeAt(i) ^ this.secretKey.charCodeAt(i % this.secretKey.length));
    }
    return btoa(encrypted);  // Convertimos a Base64 para una transmisión segura
  }
}
