import { Component, OnInit } from '@angular/core';
import { CouponService } from '../../service/coupon.service';
import { PlanService } from '../../service/plan.service';

@Component({
  selector: 'app-redeem-plan',
  templateUrl: './redeem-plan.component.html',
  styleUrls: ['./redeem-plan.component.css']
})
export class RedeemPlanComponent implements OnInit {
  confirmingPlanId: number | null = null; // ID of the plan being confirmed
  coupons: any[] = [];
  selectedCouponId: number | null = null; // Selected coupon ID
  plans: any[] = []; // List of available plans
  activePlanId: number | null = null; // Current active plan ID

  constructor(private couponService: CouponService, private planService: PlanService) {}

  ngOnInit() {
    //localStorage.setItem('userId', '3');
    this.loadCoupons();
    this.loadPlans();
    this.loadActivePlan(); // Load active plan on initialization
  }

  loadCoupons() {
    const entrepreneurshipId = Number(localStorage.getItem('userId'));
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
        next: () => {
          console.log('Cupón activado');
          this.loadCoupons(); // Reload coupons
        },
        error: (error) => console.error('Error al activar el cupón:', error)
      });
    } else {
      console.warn('No se ha seleccionado un cupón');
    }
  }

  loadPlans() {
    this.planService.getPlansWithDescriptions().subscribe({
      next: (data) => {
        this.plans = data; // Now contains plans with their functionality descriptions
        console.log('Planes con funcionalidades cargados:', this.plans);  // Check the structure of 'plans'
      },
      error: (error) => console.error('Error al cargar planes:', error)
    });
  }
  

  handlePlanSelection(planId: number) {
    if (this.confirmingPlanId === planId) {
      // Second click confirms the selection
      this.selectPlan(planId);
      this.confirmingPlanId = null; // Reset confirmation state
    } else {
      // First click triggers confirmation
      this.confirmingPlanId = planId;
    }
  }

  selectPlan(planId: number) {
    const entrepreneurshipId = Number(localStorage.getItem('userId'));
    const requestBody = {
      id: entrepreneurshipId,
      id_plan: planId
    };

    this.planService.selectPlan(requestBody).subscribe({
      next: () => {
        console.log('Plan seleccionado:', planId);
        this.activePlanId = planId; // Update active plan
        this.loadActivePlan(); // Reload active plan
      },
      error: (error) => console.error('Error al seleccionar el plan:', error)
    });
  }

  loadActivePlan() {
    const entrepreneurshipId = Number(localStorage.getItem('userId'));
    this.planService.getActivePlan(entrepreneurshipId).subscribe({
      next: (data) => {
        this.activePlanId = data?.plan?.planId || null;
        console.log('Plan activo cargado:', this.activePlanId);
      },
      error: (error) => console.error('Error al cargar el plan activo:', error)
    });
  }
}
