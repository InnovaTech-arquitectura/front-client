import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
	providedIn: 'root'
})
export class EventsService {
	private apiUrl = environment.baseApiUrl + '/bazares';

	constructor(private http: HttpClient) {}

	getBazares(page: number, size: number): Observable<any> {
		const token = localStorage.getItem('token');
		const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

		return this.http.get<any>(`${this.apiUrl}?page=${page}&size=${size}`, { headers });
	}

	getBazarDetails(id: number): Observable<any> {
		const token = localStorage.getItem('token');
		const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

		return this.http.get<any>(`${this.apiUrl}/${id}`, { headers });
	}

	addBazar(event: any): Observable<any> {
		const token = localStorage.getItem('token');
		const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

		return this.http.post<any>(`${this.apiUrl}/add`, event, { headers });
	}

	updateBazar(event: any): Observable<any> {
		const token = localStorage.getItem('token');
		const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

		return this.http.put<any>(`${this.apiUrl}/update`, event, { headers });
	}

	deleteEvent(id: number): Observable<void> {
		const token = localStorage.getItem('token');
		const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

		return this.http.delete<void>(`${this.apiUrl}/delete/${id}`, { headers });
	}
}
