import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { InicioSesionComponent } from './inicio-sesion/inicio-sesion.component';
import { CrearComponent } from './recuperar-password/crear/crear.component';
import { RecuperarComponent } from './recuperar-password/recuperar/recuperar.component';
import { VerificacionComponent } from './recuperar-password/verificacion/verificacion.component';
import { RegistroComponent } from './registro/registro.component';
import { VerBazaresComponent } from './bazares/ver-bazares/ver-bazares.component';
import { DetallesBazarComponent } from './bazares/detalles-bazar/detalles-bazar.component';
import { PagosComponent } from './pagos/pagos.component';
import { VerBazaresClienteComponent } from './bazares/ver-bazares-cliente/ver-bazares-cliente.component';
import { DetallesBazarClienteComponent } from './bazares/detalles-bazar-cliente/detalles-bazar-cliente.component';
import { BuyServicesComponent } from './shopping/buy-services/buy-services.component';
import { InfoServiceComponent } from './shopping/info-service/info-service.component';
import { ListReservationComponent } from './shopping/list-reservation/list-reservation.component';
import { PersonalInformationComponent } from './profile/personal-information/personal-information.component';
import { RedeemPlanComponent } from './plans/redeem-plan/redeem-plan.component';
import { ListCoursesComponent } from './course/list-courses/list-courses.component';
import { InfoCourseComponent } from './course/info-course/info-course.component';
import { ListSalesComponent } from './sales/list-sales/list-sales.component';
import { CreateSaleComponent } from './sales/create-sale/create-sale.component';
import { ListOrdersComponent } from './orders/list-orders/list-orders.component';
import { ListOrdersClientComponent } from './orders/list-orders-client/list-orders-client.component';
import { InfoOrderClientComponent } from './orders/info-order-client/info-order-client.component';
import { ShoppingCartComponent } from './shopping/shopping-cart/shopping-cart.component';

const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'inicio-sesion', component: InicioSesionComponent },
  { path: 'recuperar-password/recuperar', component: RecuperarComponent },
  { path: 'recuperar-password/crear', component: CrearComponent },
  { path: 'recuperar-password/verificacion', component: VerificacionComponent },
  { path: 'login', component: InicioSesionComponent },
  { path: 'registro', component: RegistroComponent },
  { path: 'bazares', component: VerBazaresComponent },
  { path: 'bazares/:id', component: DetallesBazarComponent },
  { path: 'bazares-cliente', component: VerBazaresClienteComponent},
  { path: 'bazares-cliente/:id', component: DetallesBazarClienteComponent},
  { path: 'pagos', component: PagosComponent },
  { path: 'servicios', component: BuyServicesComponent },
  { path: 'servicios/:id', component: InfoServiceComponent },
  { path: 'reservas', component: ListReservationComponent},
  { path: 'datos', component: PersonalInformationComponent},
  { path: 'planes', component: RedeemPlanComponent},
  { path: 'capacitaciones', component: ListCoursesComponent},
  { path: 'capacitaciones/info/:id', component: InfoCourseComponent },
  { path: 'ventas', component: ListSalesComponent },
  { path: 'ventas/crear', component: CreateSaleComponent },
  { path: 'pedidos', component: ListOrdersComponent },
  { path: 'pedidos-cliente', component: ListOrdersClientComponent },
  { path: 'pedidos-cliente/info/:id', component: InfoOrderClientComponent },
  { path: 'carrito', component: ShoppingCartComponent },


  { path: '', pathMatch: 'full', redirectTo: 'login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
