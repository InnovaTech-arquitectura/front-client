import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { supplier } from '../model/supplier';

@Injectable({
    providedIn: 'root'
  })
  export class CouponService {
      private baseUrl = environment.baseApiUrl + '/cupones';
  
      constructor(private http: HttpClient) {}
  
      // Obtener cupones por emprendimiento
      getCouponsByEntrepreneurshipId(entrepreneurshipId: number): Observable<any> {
          return this.http.get(`${this.baseUrl}/entrepreneurship/${entrepreneurshipId}`);
      }

      activateCoupon(couponId: number): Observable<any> {
        return this.http.patch(`${this.baseUrl}/${couponId}/toggle-active`, {}); // Cambia PUT por PATCH y agrega '/' antes de couponId
    }
    
  }
  