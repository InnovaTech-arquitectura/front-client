import { Component, OnInit } from '@angular/core';
import { CouponService } from '../../service/coupon.service';
import { PlanService } from '../../service/plan.service';

@Component({
  selector: 'app-redeem-plan',
  templateUrl: './redeem-plan.component.html',
  styleUrls: ['./redeem-plan.component.css']
})
export class RedeemPlanComponent implements OnInit {
  confirmingPlanId: number | null = null; // ID del plan en proceso de confirmación
  coupons: any[] = [];
  selectedCouponId: number | null = null; // ID del cupón seleccionado
  plans: any[] = []; // Lista de planes
  activePlanId: number | null = null; // Plan activo actual
  selectedPlanId: number | null = null;

  constructor(private couponService: CouponService, private planService: PlanService) {}

  ngOnInit() {
    this.loadCoupons();
    this.loadPlans();
    this.loadActivePlan(); // Cargar el plan activo al iniciar
  }

  loadCoupons() {
    const entrepreneurshipId = Number(localStorage.getItem('userId')); 

    //const entrepreneurshipId = 2; // ID que probaste en Swagger
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
          //console.log('Cupón activado:', response);
          this.loadCoupons(); // Recargar la lista de cupones
        },
        error: (error) => {
          //console.error('Error al activar el cupón:', error);
        }
      });
    } else {
      //console.warn('No se ha seleccionado un cupón');
    }
  }

  loadPlans() {
    this.planService.getPlans().subscribe({
      next: (data) => {
        this.plans = data; // Ajustar según la estructura de respuesta de planes
        //console.log('Planes cargados:', this.plans); // Añadir este log
      },
      error: (error) => console.error('Error al cargar planes:', error)
    });
  }

  
  handlePlanSelection(planId: number) {
    if (this.confirmingPlanId === planId) {
      // Si ya está en proceso de confirmación, llama a selectPlan
      this.selectPlan(planId);
      this.confirmingPlanId = null; // Restablecer confirmación
    } else {
      // Establece el plan actual como en proceso de confirmación
      this.confirmingPlanId = planId;
    }
  }
  
  selectPlan(planId: number) {
    const entrepreneurshipId = 2; // Cambia este ID según corresponda en tu aplicación
  
    // Crea el objeto con la estructura requerida por el endpoint
    const requestBody = {
      id: entrepreneurshipId,
      id_plan: planId
    };
  
    this.planService.selectPlan(requestBody).subscribe({
      next: (response) => {
        //console.log('Plan seleccionado:', response);
        this.activePlanId = planId; // Actualiza el plan activo después de seleccionar
        this.loadActivePlan(); // Carga el plan activo después de seleccionar
      },
      error: (error) => console.error('Error al seleccionar el plan:', error)
    });
  }
  


  // Cargar el plan activo
  loadActivePlan() {
    const entrepreneurshipId = 2; 
    this.planService.getActivePlan(entrepreneurshipId).subscribe({
      next: (data) => {
        this.activePlanId = data?.plan?.planId || null; // Asegúrate de que 'data.plan.planId' exista
        //console.log('Plan activo cargado:', this.activePlanId); // Añadir este log
      },
      error: (error) => console.error('Error al cargar el plan activo:', error)
    });
  }
}
