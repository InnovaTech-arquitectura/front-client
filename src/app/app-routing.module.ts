import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { InicioSesionComponent } from './inicio-sesion/inicio-sesion.component'; // Adjust path if needed


import { InicioSesionComponent } from './inicio-sesion/inicio-sesion.component';
import { RegistroComponent } from './registro/registro.component';
import { VerBazaresComponent } from './bazares/ver-bazares/ver-bazares.component';
import { DetallesBazarComponent } from './bazares/detalles-bazar/detalles-bazar.component';
import { PagosComponent } from './pagos/pagos.component';
import { VerBazaresClienteComponent } from './bazares/ver-bazares-cliente/ver-bazares-cliente.component';
import { DetallesBazarClienteComponent } from './bazares/detalles-bazar-cliente/detalles-bazar-cliente.component';
import { BuyServicesComponent } from './shopping/buy-services/buy-services.component';
import { InfoServiceComponent } from './shopping/info-service/info-service.component';

const routes: Routes = [
  { path: '', component: LandingPageComponent }, // Default route
  { path: 'inicio-sesion', component: InicioSesionComponent }, // Route for login

  { path: 'login', component: InicioSesionComponent },
  { path: 'registro', component: RegistroComponent },
  { path: 'bazares', component: VerBazaresComponent },
  { path: 'bazares/:id', component: DetallesBazarComponent },
  { path: 'bazares-cliente', component: VerBazaresClienteComponent},
  { path: 'bazares-cliente/:id', component: DetallesBazarClienteComponent},
  { path: 'pagos', component: PagosComponent },
  { path: 'servicios', component: BuyServicesComponent },
  { path: 'servicios/:id', component: InfoServiceComponent },
  { path: '', pathMatch: 'full', redirectTo: 'login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
