import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, forkJoin } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { Plan } from '../plan.model';

@Injectable({
  providedIn: 'root',
})
export class PlanService {
  private baseUrl = environment.baseApiUrl + '/api/Entrepreneurship';
  private functionalitiesUrl = environment.baseApiUrl + '/api/PlanCupon/functionalities';

  constructor(private http: HttpClient) {}

  // Fetch all plans
  getPlans(): Observable<Plan[]> {
    return this.http.get<Plan[]>(`${this.baseUrl}/plans`);
  }

  // Fetch functionalities (descriptions) for all plans
  getPlanFunctionalities(): Observable<any[]> {
    return this.http.get<any[]>(this.functionalitiesUrl);
  }

  // Combine plans with their functionalities
  getPlansWithDescriptions(): Observable<Plan[]> {
    return forkJoin({
      plans: this.getPlans(),
      functionalities: this.getPlanFunctionalities(),
    }).pipe(
      map(({ plans, functionalities }) =>
        plans.map(plan => ({
          ...plan,
          planFunctionalities: functionalities
            .filter(f => f.planId === plan.id)  // Ensure the planId matches the functionality's planId
            .map(f => ({
              functionalityId: f.functionalityId,
              name: f.name,
              description: f.description,
            })),
        }))
      )
    );
  }
  
  

  // Fetch the active plan
  getActivePlan(entrepreneurshipId: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/ActivePlan/${entrepreneurshipId}`);
  }

  // Select a plan
  selectPlan(requestBody: { id: number; id_plan: number }) {
    return this.http.post(`${this.baseUrl}/SelectPlan`, requestBody);
  }
}
