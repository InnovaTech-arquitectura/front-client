import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private apiUrl = environment.baseApiUrl + '/product';

  constructor(
    private http: HttpClient
  ) { }

  listProducts(page: number, size: number): Observable<any> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

    return this.http.get<any>(`${this.apiUrl + '/entrepreneurship/' + localStorage.getItem('userId')}?page=${page}&size=${size}`, { headers });
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
