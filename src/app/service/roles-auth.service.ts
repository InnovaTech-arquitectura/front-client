import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RolesAuthService {

  private apiUrl = environment.baseApiUrl + '/NavBar/users/';

  constructor(
    private http: HttpClient
  ) { }

  findAll(): Observable<any>{
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

    const userID = localStorage.getItem('userId');
    
    console.log(this.apiUrl + userID + '/functionalities');
    return this.http.get<any>(this.apiUrl + userID + '/functionalities', { headers });
  }
}
