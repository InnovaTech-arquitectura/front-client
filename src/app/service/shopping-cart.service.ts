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

  // Método para obtener productos del carrito
  obtenerItems(): Observable<any> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

    return this.http.get<any>(this.apiUrl + '/shoppingCart', { headers });
  }

  // Método para agregar un producto al carrito
  agregarItemAlCarrito(producto: any): Observable<any> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    
    return this.http.post<any>(this.apiUrl + '/add', producto, { headers });
  }
  // Método para eliminar un producto del carrito
  eliminarItemDelCarrito(productId: number): Observable<any> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    
    return this.http.delete<any>(`${this.apiUrl}/remove/${productId}`, { headers });
  }
  // Método para actualizar la cantidad de un producto en el carrito
  actualizarCantidadProducto(productId: number, cantidad: number): Observable<any> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    
    return this.http.put<any>(`${this.apiUrl}/update/${productId}`, { cantidad }, { headers });
  }
}
