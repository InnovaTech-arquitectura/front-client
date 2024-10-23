import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Entrepreneurship } from '../entrepreneurship.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EntrepreneurshipService {
  private apiUrl = environment.baseApiUrl + '/api/account'; // Cambia esto por la URL de tu API

  constructor(private http: HttpClient) {}

  getEntrepreneurship(id: number): Observable<Entrepreneurship> {
    return this.http.get<Entrepreneurship>(`${this.apiUrl}/entrepreneurship/${id}`);
  }

  updateEntrepreneurship(id: number, payload: any): Observable<Entrepreneurship> {
    return this.http.put<Entrepreneurship>(`${this.apiUrl}/entrepreneurship/${id}`, payload);
  }
  
}
