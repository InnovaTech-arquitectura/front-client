import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  private apiUrl = environment.baseApiUrl + '/service';

  constructor(
    private http: HttpClient
  ) { }

  listServices(page: number, size: number): Observable<any> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

    return this.http.get<any>(`${this.apiUrl + '/entrepreneurship/' + localStorage.getItem('userId')}?page=${page}&size=${size}`, { headers });
  }

  findService(id: number): Observable<any> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

    return this.http.get<any>(this.apiUrl + '/' + id, { headers });
  }

  editService(id: number, service: any): Observable<any> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

    return this.http.put<any>(this.apiUrl + '/' + id, service, { headers });
  }

  createService(service: any): Observable<any> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

    return this.http.post<any>(this.apiUrl + '/new', service, { headers });
  }

  deleteService(id: number): Observable<any> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

    return this.http.delete<any>(this.apiUrl + '/' + id, { headers });
  }
}
