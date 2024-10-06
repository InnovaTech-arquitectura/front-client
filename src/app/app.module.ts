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
    DetallesBazarComponent
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
