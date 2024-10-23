import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ClientAccount } from '../client-account.model';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  private apiUrl = 'http://localhost:5293/api/account'; // Cambia esto por la URL de tu API

  constructor(private http: HttpClient) {}

  getClient(id: number): Observable<ClientAccount> {
    return this.http.get<ClientAccount>(`${this.apiUrl}/client/${id}`);
  }

  updateClient(id: number, client: ClientAccount): Observable<ClientAccount> {
    return this.http.put<ClientAccount>(`${this.apiUrl}/client/${id}`, client);
  }
}