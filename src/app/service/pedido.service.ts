import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pedido } from '../pedido.model';
import { environment } from '../../environments/environment';
import { Producto } from '../model/producto';

@Injectable({
  providedIn: 'root'
})
export class PedidoService {

  private apiUrl = environment.funcionalidadesUrl + ':8090/order';



  constructor(private http: HttpClient) {}

  /*getAllPedidos(page: number, limit: number): Observable<Pedido[]> {
    return this.http.get<Pedido[]>(`${this.apiUrl}/all?page=${page}&limit=${limit}`);
}


  getPedidoById(id: number): Observable<Pedido> { 
    return this.http.get<Pedido>(`${this.apiUrl}/${id}`);
  }*/

    getAllPedidos(page: number, limit: number): Observable<Pedido[]> {
      return this.http.get<Pedido[]>(`${this.apiUrl}/all?page=${page}&limit=${limit}`);
    }
    
    getPedidoById(id: number): Observable<Pedido> { 
      return this.http.get<Pedido>(`${this.apiUrl}/${id}`);
    }

    getPedidoProductos(id: number): Observable<Producto[]> {
      return this.http.get<Producto[]>(`${this.apiUrl}/${id}/details`);
    }
    
    

  deletePedido(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/delete/${id}`);
  }
}