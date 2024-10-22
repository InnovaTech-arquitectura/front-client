import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EcommerceService {

  private apiUrl = environment.funcionalidadesUrl + ':8080/api/tienda';

  constructor(
    private http: HttpClient
  ) { }

  findProducts(): Observable<any>{
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
  
    return this.http.get<any>(this.apiUrl + '/productos', { headers });
  }

  findServices(): Observable<any>{
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
  
    return this.http.get<any>(this.apiUrl + '/servicios', { headers });
  }

  findProductById(id: number): Observable<any>{
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
  
    return this.http.get<any>(this.apiUrl + '/productos/' + id, { headers });
  }

  findServiceById(id: number): Observable<any>{
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
  
    return this.http.get<any>(this.apiUrl + '/servicios/' + id, { headers });
  }
}