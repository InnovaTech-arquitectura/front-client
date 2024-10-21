import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SupplierService {

  private apiUrl = environment.funcionalidadesUrl + ':8090/supplier';

  constructor(
    private http: HttpClient
  ) { }
}
