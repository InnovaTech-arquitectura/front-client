import { Component, OnInit } from '@angular/core';
import { CouponService } from '../../service/coupon.service';

@Component({
  selector: 'app-redeem-plan',
  templateUrl: './redeem-plan.component.html',
  styleUrls: ['./redeem-plan.component.css']
})
export class RedeemPlanComponent implements OnInit {
  coupons: any[] = [];
  selectedCouponId: number | null = null; // Para almacenar el ID del cupón seleccionado

  constructor(private couponService: CouponService) {}

  ngOnInit() {
    this.loadCoupons();
  }

  loadCoupons() {
    const entrepreneurshipId = 2; // ID que probaste en Swagger
    this.couponService.getCouponsByEntrepreneurshipId(entrepreneurshipId).subscribe({
      next: (data) => {
        this.coupons = data.map(coupon => ({
          idCoupon: coupon.idCoupon,
          description: coupon.coupon?.description || 'Descripción no disponible',
          active: coupon.active
        }));
      },
      error: (error) => console.error('Error al cargar cupones:', error)
    });
  }

  redeemCoupon() {
    if (this.selectedCouponId !== null) {
        this.couponService.activateCoupon(this.selectedCouponId).subscribe({
            next: (response) => {
                console.log('Cupón activado:', response);
                // Actualiza la lista de cupones después de la activación si es necesario
                this.loadCoupons(); // Opcional, para recargar la lista de cupones
            },
            error: (error) => {
                console.error('Error al activar el cupón:', error);
            }
        });
    } else {
        console.warn('No se ha seleccionado un cupón');
    }
}

}
