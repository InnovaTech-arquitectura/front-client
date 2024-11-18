import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'; // Asegúrate de importar HttpHeaders
import { Observable } from 'rxjs';
import { Reserva } from '../reserva.model'; // Asegúrate de importar el modelo correctamente
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ReservaService {
  private apiUrl = environment.baseApiUrl + '/api/reservas';

  constructor(private http: HttpClient) {}

  // Método para obtener todas las reservas con encabezado de autorización
  getAllReservas(): Observable<Reserva[]> {
    const token = localStorage.getItem('token'); // Obtener el token almacenado
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`); // Añadir el token al header

    return this.http.get<Reserva[]>(this.apiUrl, { headers }); // Realizar la solicitud con el token en el header
  }

  // Método para obtener una reserva por su ID con encabezado de autorización
  getReservaById(id: number): Observable<Reserva> {
    const token = localStorage.getItem('token'); // Obtener el token almacenado
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`); // Añadir el token al header

    return this.http.get<Reserva>(`${this.apiUrl}/${id}`, { headers }); // Realizar la solicitud con el token en el header
  }
}
