import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private apiUrl = environment.baseApiUrl + '/product';

  constructor(
    private http: HttpClient
  ) { }

  listProducts(pageIndex: number, pageSize: number): Observable<any> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

    const params = { 
      limit: pageSize.toString(), 
      page: pageIndex.toString() 
    };

    return this.http.get<any>(`${this.apiUrl + '/entrepreneurship/' + localStorage.getItem('userId')}`, { headers, params });
  }

  findProduct(id: number): Observable<any> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

    return this.http.get<any>(this.apiUrl + '/' + id, { headers });
  }

  editProduct(id: number, product: any): Observable<any> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

    return this.http.put<any>(this.apiUrl + '/' + id, product, { headers });
  }

  createProduct(product: any): Observable<any> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

    return this.http.post<any>(this.apiUrl + '/new', product, { headers });
  }

  deleteProduct(id: number): Observable<any> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

    return this.http.delete<any>(this.apiUrl + '/' + id, { headers });
  }
}
