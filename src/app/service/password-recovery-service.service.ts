import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PasswordRecoveryService {
  private apiUrl = environment.baseApiUrl + '/api/users';

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
