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

import { VerProductosServiciosComponent } from './inventario/ver-productos-servicios/ver-productos-servicios.component';
import { NuevoProductoComponent } from './inventario/nuevo-producto/nuevo-producto.component';
import { EditarProductoComponent } from './inventario/editar-producto/editar-producto.component';
import { InfoProductoComponent } from './inventario/info-producto/info-producto.component';
import { InfoSupplierComponent } from './inventario/info-supplier/info-supplier.component';
import { NuevoServicioComponent } from './inventario/nuevo-servicio/nuevo-servicio.component';
import { EditarServicioComponent } from './inventario/editar-servicio/editar-servicio.component';
import { InfoServicioComponent } from './inventario/info-servicio/info-servicio.component';
import { EntrepreneurshipStatsComponent } from './dashboard/entrepreneurship-stats/entrepreneurship-stats.component';
import { AccountInfoComponent } from './account/account-info/account-info.component';

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

  { path: 'inventario', component: VerProductosServiciosComponent },
  { path: 'inventario/nuevoProducto', component: NuevoProductoComponent },
  { path: 'inventario/editarProducto', component: EditarProductoComponent },
  { path: 'inventario/infoProducto', component: InfoProductoComponent},
  { path: 'inventario/infoSupplier', component: InfoSupplierComponent},

  { path: 'inventario/nuevoServicio', component: NuevoServicioComponent },
  { path: 'inventario/editarServicio', component: EditarServicioComponent },
  { path: 'inventario/infoServicio', component: InfoServicioComponent},
  
  { path: 'bazares-cliente', component: VerBazaresClienteComponent},
  { path: 'bazares-cliente/:id', component: DetallesBazarClienteComponent},
  { path: 'pagos', component: PagosComponent },
  { path: 'servicios', component: BuyServicesComponent },
  { path: 'servicios/:id', component: InfoServiceComponent },
  { path: 'reservas', component: ListReservationComponent},
  { path: 'datos', component: PersonalInformationComponent},
  { path: 'planes', component: RedeemPlanComponent},
  { path: 'dashboard', component: EntrepreneurshipStatsComponent },
  { path: 'account', component: AccountInfoComponent },
  { path: '', pathMatch: 'full', redirectTo: 'login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
