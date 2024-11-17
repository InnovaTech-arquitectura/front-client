import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Plan } from '../plan.model';

@Injectable({
	providedIn: 'root'
})
export class PlanService {
	private baseUrl = environment.baseApiUrl + '/api/Entrepreneurship';

	constructor(private http: HttpClient) {}

	// Obtener todos los planes
	getPlans(): Observable<Plan[]> {
		const token = localStorage.getItem('token');
		const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

		return this.http.get<Plan[]>(`${this.baseUrl}/plans`, { headers });
	}

	// Obtener el plan activo
	getActivePlan(entrepreneurshipId: number): Observable<any> {
		const token = localStorage.getItem('token');
		const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

		return this.http.get(`${this.baseUrl}/ActivePlan/${entrepreneurshipId}`, { headers });
	}

	// Seleccionar un plan
	selectPlan(requestBody: { id: number; id_plan: number }) {
		const token = localStorage.getItem('token');
		const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

		return this.http.post(`${this.baseUrl}/SelectPlan`, requestBody, { headers });
	}
}
