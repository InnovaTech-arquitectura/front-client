import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EventsService {
  private apiUrl = `${environment.funcionalidadesUrl}:8080/bazares`;

  constructor(private http: HttpClient) {}

  getBazares(page: number, size: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}?page=${page}&size=${size}`);
  }

  // Obtener detalles de un bazar
  getBazarDetails(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

  // Agregar un nuevo bazar
  addBazar(event: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/add`, event);
  }

  // Actualizar un bazar
  updateBazar(event: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/update`, event);
  }

  // Eliminar un bazar
  deleteEvent(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/delete/${id}`);
  }
}
