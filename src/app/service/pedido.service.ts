import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { catchError, map, Observable, of } from 'rxjs';
import { Pedido } from '../pedido.model';
import { environment } from '../../environments/environment';
import { Producto } from '../model/producto';
import { Order } from '../model/order';

@Injectable({
	providedIn: 'root'
  })
  export class PedidoService {
	private apiUrl = environment.baseApiUrl + '';
  
	constructor(private http: HttpClient) {}
  
	// Método para obtener todos los pedidos con paginación
	getAllPedidos(page: number, limit: number): Observable<Order[]> {
	  const token = localStorage.getItem('token'); // Obtén el token almacenado en localStorage
	  const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`); // Añades el token al header de la solicitud
  
	  // Realiza la solicitud con el token en el header
	  return this.http.get<Order[]>(`${this.apiUrl}/all?page=${page}&limit=${limit}`, { headers });
	}
  
	// Método para obtener los productos de un pedido
	getPedidoProductos(id: number): Observable<Producto[]> {
	  const token = localStorage.getItem('token');
	  const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
  
	  return this.http.get<Producto[]>(`${this.apiUrl}/${id}/details`, { headers });
	}
  
	// Método para eliminar un pedido
	deletePedido(id: number): Observable<boolean> {
	  const token = localStorage.getItem('token');
	  const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
  
	  return this.http.delete(`${this.apiUrl}/delete/${id}`, { headers, observe: 'response' }).pipe(
		map((response) => {
		  return response.status === 201 || response.status === 204;
		}),
		catchError(() => of(false))
	  );
	}
  }
  