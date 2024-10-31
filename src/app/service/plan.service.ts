import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
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
        return this.http.get<Plan[]>(`${this.baseUrl}/plans`);
      }

    // Obtener el plan activo
    getActivePlan(entrepreneurshipId: number): Observable<any> {
      return this.http.get(`${this.baseUrl}/ActivePlan/${entrepreneurshipId}`);
    }
  
    // Seleccionar un plan
    selectPlan(requestBody: { id: number; id_plan: number }) {
      return this.http.post(`${this.baseUrl}/SelectPlan`, requestBody);
    }
  }
  