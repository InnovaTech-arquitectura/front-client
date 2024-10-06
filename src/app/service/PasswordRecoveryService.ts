import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PasswordRecoveryService {
  private apiUrl = 'http://localhost:5293/api/users'; // Cambia esto si tu API está en otra URL

  constructor(private http: HttpClient) {}

  requestPasswordRecovery(email: string): Observable<any> {
    return this.http.post<{ message: string }>(`${this.apiUrl}/request-password-recovery`, { Email: email });
  }


  
  requestVerificationCode(code: string): Observable<any> {
    return this.http.post<{ message: string }>(`${this.apiUrl}/verify-code`, { Code: code });
  }


  setNewPassword(newPassword: string, confirmPassword: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/set-new-password`, { NewPassword: newPassword, ConfirmNewPassword: confirmPassword }, { responseType: 'text' });
}

}
