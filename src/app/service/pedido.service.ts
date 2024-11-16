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
	private apiUrl = environment.baseApiUrl + '/order';

	constructor(private http: HttpClient) {}

	/*getAllPedidos(page: number, limit: number): Observable<any> {
		const token = localStorage.getItem('token');
		const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

		//console.log('Enviando solicitud al backend:', `${this.apiUrl}/all?page=${page}&limit=${limit}`); 
		return this.http.get<any>(`${this.apiUrl}/all?page=${page}&limit=${limit}`, { headers });
 }*/
	getAllPedidos(page: number, limit: number): Observable<Order[]> {
		const token = localStorage.getItem('token');
		const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
		return this.http.get<Order[]>(`${this.apiUrl}/all?page=${page}&limit=${limit}`, { headers });
	}


	/*getPedidoById(id: number): Observable<Pedido> {
		const token = localStorage.getItem('token');
		const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

		return this.http.get<Pedido>(`${this.apiUrl}/${id}`, { headers });
	}
		*/

	getPedidoProductos(id: number): Observable<Producto[]> {
		const token = localStorage.getItem('token');
		const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

		return this.http.get<Producto[]>(`${this.apiUrl}/${id}/details`, { headers });
	}

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
