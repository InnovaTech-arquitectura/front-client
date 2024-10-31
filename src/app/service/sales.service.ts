import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { infoSale } from 'src/app/model/infoSale';

@Injectable({
  providedIn: 'root'
})
export class SalesService {

  private apiUrl = environment.baseApiUrl + '/sales';

  constructor( private http: HttpClient ) { }

  findAll(): Observable<infoSale[]> {
		const token = localStorage.getItem('token');
		const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
		return this.http.get<infoSale[]>(this.apiUrl + '/all', { headers });
	}
  
  getSales(pageIndex: number, pageSize: number): Observable<any> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    const params = { 
      limit: pageSize.toString(), 
      page: pageIndex.toString() 
    };

    return this.http.get<any>(`${this.apiUrl}/all`, { headers, params });
  }

  addSale(sale: any): Observable<any> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

    return this.http.post<any>(`${this.apiUrl}/add`, sale);
  }
}