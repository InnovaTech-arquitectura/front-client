import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Reserva } from '../reserva.model'; // Asegúrate de importar el modelo correctamente
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ReservaService {
  private apiUrl = environment.baseApiUrl + '/api/reservas';

  //private apiUrl = 'http://localhost:8080/api/reservas'; // Asegúrate de que la URL coincida con el backend

  constructor(private http: HttpClient) {}

  getAllReservas(): Observable<Reserva[]> {
    return this.http.get<Reserva[]>(this.apiUrl);
  }

  getReservaById(id: number): Observable<Reserva> {
    return this.http.get<Reserva>(`${this.apiUrl}/${id}`);
  }
}
