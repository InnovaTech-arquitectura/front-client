import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {
  
  private apiUrl = environment.baseApiUrl + '/api/carrito'; 

  constructor(
    private http: HttpClient
  ) {}

  // Método para obtener productos
  obtenerItems(): Observable<any> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

    return this.http.get<any>(this.apiUrl + '/shoppingCart', { headers });
  }
}

