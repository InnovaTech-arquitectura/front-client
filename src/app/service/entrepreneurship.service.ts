import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Entrepreneurship } from '../entrepreneurship.model';
import { environment } from 'src/environments/environment';

@Injectable({
	providedIn: 'root'
})
export class EntrepreneurshipService {
	private apiUrl = environment.baseApiUrl + '/api/account'; // Cambia esto por la URL de tu API

	constructor(private http: HttpClient) {}

	getEntrepreneurship(id: number): Observable<Entrepreneurship> {
		const token = localStorage.getItem('token');
		const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

		return this.http.get<Entrepreneurship>(`${this.apiUrl}/entrepreneurship/${id}`, { headers });
	}

	updateEntrepreneurship(id: number, payload: any): Observable<Entrepreneurship> {
		const token = localStorage.getItem('token');
		const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

		return this.http.put<Entrepreneurship>(`${this.apiUrl}/entrepreneurship/${id}`, payload, { headers });
	}
}
