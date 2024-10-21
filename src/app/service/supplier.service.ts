import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { supplier } from '../model/supplier';

@Injectable({
  providedIn: 'root'
})
export class SupplierService {

  private apiUrl = environment.funcionalidadesUrl + ':8090/supplier';

  constructor(
    private http: HttpClient
  ) { }

  findAll(): Observable<any>{
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
  
    return this.http.get<any>(this.apiUrl + '/all', { headers });
  }

  addSupplier(supplier: supplier): Observable<any> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

    return this.http.post(this.apiUrl, supplier, { headers, responseType: 'text' });
  }

  deleteSupplier(id: number): Observable<any> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    
    return this.http.delete(this.apiUrl + '/delete/' + id, { headers, responseType: 'text' });
  }
}
