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
import { PagosComponent } from './pagos/pagos.component';
import { VerBazaresClienteComponent } from './bazares/ver-bazares-cliente/ver-bazares-cliente.component';
import { DetallesBazarClienteComponent } from './bazares/detalles-bazar-cliente/detalles-bazar-cliente.component';
import { BuyServicesComponent } from './shopping/buy-services/buy-services.component';
import { InfoServiceComponent } from './shopping/info-service/info-service.component';
import { SidebarClientComponent } from './componentTools/sidebar-client/sidebar-client.component';
import { HeaderClientComponent } from './componentTools/header-client/header-client.component';
import { ListReservationComponent } from './shopping/list-reservation/list-reservation.component';
import { PersonalInformationComponent } from './profile/personal-information/personal-information.component';
import { RedeemPlanComponent } from './plans/redeem-plan/redeem-plan.component';

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
    PagosComponent,
    VerBazaresClienteComponent,
    DetallesBazarClienteComponent,
    BuyServicesComponent,
    InfoServiceComponent,
    SidebarClientComponent,
    HeaderClientComponent,
    ListReservationComponent,
    PersonalInformationComponent,
    RedeemPlanComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
