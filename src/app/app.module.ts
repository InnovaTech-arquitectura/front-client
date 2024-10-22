import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioSesionComponent } from './inicio-sesion/inicio-sesion.component';
import { HeaderComponent } from './componentTools/header/header.component';
import { SidebarComponent } from './componentTools/sidebar/sidebar.component';
import { RegistroComponent } from './registro/registro.component';
import { BarChartComponent } from './componentTools/bar-chart/bar-chart.component';
import { LineChartComponent } from './componentTools/line-chart/line-chart.component';
import { PieChartComponent } from './componentTools/pie-chart/pie-chart.component';
import { VerBazaresComponent } from './bazares/ver-bazares/ver-bazares.component';
import { DetallesBazarComponent } from './bazares/detalles-bazar/detalles-bazar.component';

import { VerProductosServiciosComponent } from './inventario/ver-productos-servicios/ver-productos-servicios.component';
import { NuevoProductoComponent } from './inventario/nuevo-producto/nuevo-producto.component';
import { EditarProductoComponent } from './inventario/editar-producto/editar-producto.component';
import { InfoProductoComponent } from './inventario/info-producto/info-producto.component';
import { InfoSupplierComponent } from './proveedores/info-supplier/info-supplier.component';
import { NuevoServicioComponent } from './inventario/nuevo-servicio/nuevo-servicio.component';
import { EditarServicioComponent } from './inventario/editar-servicio/editar-servicio.component';
import { InfoServicioComponent } from './inventario/info-servicio/info-servicio.component';

import { PagosComponent } from './pagos/pagos.component';
import { VerBazaresClienteComponent } from './bazares/ver-bazares-cliente/ver-bazares-cliente.component';
import { DetallesBazarClienteComponent } from './bazares/detalles-bazar-cliente/detalles-bazar-cliente.component';
import { BuyServicesComponent } from './shopping/buy-services/buy-services.component';
import { InfoServiceComponent } from './shopping/info-service/info-service.component';
import { SidebarClientComponent } from './componentTools/sidebar-client/sidebar-client.component';
import { HeaderClientComponent } from './componentTools/header-client/header-client.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { CrearComponent } from './recuperar-password/crear/crear.component';
import { RecuperarComponent } from './recuperar-password/recuperar/recuperar.component';
import { VerificacionComponent } from './recuperar-password/verificacion/verificacion.component';
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

import { EntrepreneurshipStatsComponent } from './dashboard/entrepreneurship-stats/entrepreneurship-stats.component';

import { AccountInfoComponent } from './account/account-info/account-info.component';
import { MisPreguntasComponent } from './soporte/mis-preguntas/mis-preguntas.component';
import { CrearPreguntasComponent } from './soporte/crear-preguntas/crear-preguntas.component';
import { VerPreguntaComponent } from './soporte/ver-pregunta/ver-pregunta.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatPaginatorModule } from '@angular/material/paginator';

import { AllSuppliersComponent } from './proveedores/all-suppliers/all-suppliers.component';
import { AddSupplierComponent } from './proveedores/add-supplier/add-supplier.component';


@NgModule({
  declarations: [
    AppComponent,
    InicioSesionComponent,
    HeaderComponent,
    SidebarComponent,
    RegistroComponent,
    BarChartComponent,
    LineChartComponent,
    PieChartComponent,
    VerBazaresComponent,
    DetallesBazarComponent,
    VerProductosServiciosComponent,
    NuevoProductoComponent,
    EditarProductoComponent,
    InfoProductoComponent,
    InfoSupplierComponent,
    DetallesBazarComponent,
    NuevoServicioComponent,
    EditarServicioComponent,
    InfoServicioComponent,
    PagosComponent,
    VerBazaresClienteComponent,
    DetallesBazarClienteComponent,
    BuyServicesComponent,
    InfoServiceComponent,
    SidebarClientComponent,
    HeaderClientComponent,
    LandingPageComponent,
    CrearComponent,
    RecuperarComponent,
    VerificacionComponent,
    ListReservationComponent,
    PersonalInformationComponent,
    RedeemPlanComponent,
    ListCoursesComponent,
    InfoCourseComponent,
    ListSalesComponent,
    CreateSaleComponent,
    ListOrdersComponent,
    ListOrdersClientComponent,
    InfoOrderClientComponent,
    ShoppingCartComponent,
    EntrepreneurshipStatsComponent,
    AccountInfoComponent,
    MisPreguntasComponent,
    CrearPreguntasComponent,
    VerPreguntaComponent,
    AllSuppliersComponent,
    AddSupplierComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatPaginatorModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
