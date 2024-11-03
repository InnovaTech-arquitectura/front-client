import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { supplier } from '../model/supplier';

@Injectable({
	providedIn: 'root'
})
export class CouponService {
	private baseUrl = environment.baseApiUrl + '/cupones';

	constructor(private http: HttpClient) {}

	getCouponsByEntrepreneurshipId(entrepreneurshipId: number): Observable<any> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    
    return this.http.get(`${this.baseUrl}/entrepreneurship/${entrepreneurshipId}`, { headers });
  }

  activateCoupon(couponId: number): Observable<any> {
      const token = localStorage.getItem('token');
      const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
      
      return this.http.patch(`${this.baseUrl}/${couponId}/toggle-active`, {}, { headers });
  }
}
