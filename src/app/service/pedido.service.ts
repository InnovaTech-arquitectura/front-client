import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pedido } from '../pedido.model'; // Asegúrate de definir el modelo
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PedidoService {
  private apiUrl = environment.baseApiUrl + '/api/pedidos';

  //private apiUrl = 'http://localhost:8080/api/pedidos'; // Cambia esto según tu configuración

  constructor(private http: HttpClient) {}

  getAllPedidos(): Observable<Pedido[]> {
    return this.http.get<Pedido[]>(this.apiUrl);
  }

  getPedidoById(id: number): Observable<Pedido> {
    return this.http.get<Pedido>(`${this.apiUrl}/${id}`);
  }
}