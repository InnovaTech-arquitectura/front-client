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

import { VerProductosServiciosComponent } from './inventario/ver-productos-servicios/ver-productos-servicios.component';
import { NuevoProductoComponent } from './inventario/nuevo-producto/nuevo-producto.component';
import { EditarProductoComponent } from './inventario/editar-producto/editar-producto.component';
import { InfoProductoComponent } from './inventario/info-producto/info-producto.component';
import { InfoSupplierComponent } from './proveedores/info-supplier/info-supplier.component';
import { NuevoServicioComponent } from './inventario/nuevo-servicio/nuevo-servicio.component';
import { EditarServicioComponent } from './inventario/editar-servicio/editar-servicio.component';
import { InfoServicioComponent } from './inventario/info-servicio/info-servicio.component';
import { EntrepreneurshipStatsComponent } from './dashboard/entrepreneurship-stats/entrepreneurship-stats.component';
import { AccountInfoComponent } from './account/account-info/account-info.component';
import { CrearPreguntasComponent } from './soporte/crear-preguntas/crear-preguntas.component';
import { VerPreguntaComponent } from './soporte/ver-pregunta/ver-pregunta.component';
import { MisPreguntasComponent } from './soporte/mis-preguntas/mis-preguntas.component';
import { AllSuppliersComponent } from './proveedores/all-suppliers/all-suppliers.component';
import { AddSupplierComponent } from './proveedores/add-supplier/add-supplier.component';
import { BuyProductsComponent } from './shopping/buy-products/buy-products.component';
import { InfoProductComponent } from './shopping/info-product/info-product.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'inicio-sesion', component: InicioSesionComponent },
  { path: 'recuperar-password/recuperar', component: RecuperarComponent },
  { path: 'recuperar-password/crear', component: CrearComponent },
  { path: 'recuperar-password/verificacion', component: VerificacionComponent },
  { path: 'login', component: InicioSesionComponent },
  { path: 'registro', component: RegistroComponent },
  { path: 'bazares', component: VerBazaresComponent, canActivate: [AuthGuard] },
  { path: 'bazares/:id', component: DetallesBazarComponent, canActivate: [AuthGuard] },

  { path: 'inventario', component: VerProductosServiciosComponent, canActivate: [AuthGuard] },
  { path: 'inventario/nuevoProducto', component: NuevoProductoComponent, canActivate: [AuthGuard] },
  { path: 'inventario/editarProducto', component: EditarProductoComponent, canActivate: [AuthGuard] },
  { path: 'inventario/infoProducto', component: InfoProductoComponent, canActivate: [AuthGuard] },

  { path: 'proveedores', component: AllSuppliersComponent, canActivate: [AuthGuard] },
  { path: 'proveedores/add', component: AddSupplierComponent, canActivate: [AuthGuard] },
  { path: 'proveedores/:id', component: InfoSupplierComponent, canActivate: [AuthGuard] },

  { path: 'inventario/nuevoServicio', component: NuevoServicioComponent, canActivate: [AuthGuard] },
  { path: 'inventario/editarServicio', component: EditarServicioComponent, canActivate: [AuthGuard] },
  { path: 'inventario/infoServicio', component: InfoServicioComponent, canActivate: [AuthGuard] },

  { path: 'bazares-cliente', component: VerBazaresClienteComponent, canActivate: [AuthGuard] },
  { path: 'bazares-cliente/:id', component: DetallesBazarClienteComponent, canActivate: [AuthGuard] },
  { path: 'pagos', component: PagosComponent, canActivate: [AuthGuard] },
  { path: 'servicios', component: BuyServicesComponent, canActivate: [AuthGuard] },
  { path: 'servicios/:id', component: InfoServiceComponent, canActivate: [AuthGuard] },
  { path: 'productos', component: BuyProductsComponent, canActivate: [AuthGuard] },
  { path: 'productos/:id', component: InfoProductComponent, canActivate: [AuthGuard] },
  { path: 'reservas', component: ListReservationComponent, canActivate: [AuthGuard] },
  { path: 'datos', component: PersonalInformationComponent, canActivate: [AuthGuard] },
  { path: 'planes', component: RedeemPlanComponent, canActivate: [AuthGuard] },

  { path: 'capacitaciones', component: ListCoursesComponent, canActivate: [AuthGuard] },
  { path: 'capacitaciones/info/:id', component: InfoCourseComponent, canActivate: [AuthGuard] },
  { path: 'ventas', component: ListSalesComponent, canActivate: [AuthGuard] },
  { path: 'ventas/crear', component: CreateSaleComponent, canActivate: [AuthGuard] },
  { path: 'pedidos', component: ListOrdersComponent, canActivate: [AuthGuard] },
  { path: 'pedidos-cliente', component: ListOrdersClientComponent, canActivate: [AuthGuard] },
  { path: 'pedidos-cliente/info/:id', component: InfoOrderClientComponent, canActivate: [AuthGuard] },
  { path: 'carrito', component: ShoppingCartComponent, canActivate: [AuthGuard] },
  { path: 'soporte/crear-pregunta', component: CrearPreguntasComponent, canActivate: [AuthGuard] },
  { path: 'soporte/ver-pregunta/:id', component: VerPreguntaComponent, canActivate: [AuthGuard] },
  { path: 'soporte', component: MisPreguntasComponent, canActivate: [AuthGuard] },

  { path: 'dashboard', component: EntrepreneurshipStatsComponent, canActivate: [AuthGuard] },
  { path: 'account', component: AccountInfoComponent, canActivate: [AuthGuard] },

  { path: '', pathMatch: 'full', redirectTo: 'login' }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
