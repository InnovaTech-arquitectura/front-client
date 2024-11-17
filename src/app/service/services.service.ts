import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  private apiUrl = environment.baseApiUrl + '/service';

  constructor(
    private http: HttpClient
  ) { }

  listServices(pageIndex: number, pageSize: number): Observable<any> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

    const params = { 
      limit: pageSize.toString(), 
      page: pageIndex.toString() 
    };

    return this.http.get<any>(`${this.apiUrl + '/entrepreneurship/' + localStorage.getItem('userId')}`, { headers, params });
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
