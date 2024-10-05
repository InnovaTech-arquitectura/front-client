import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { InicioSesionComponent } from './inicio-sesion/inicio-sesion.component';
import { CrearComponent } from './recuperar-password/crear/crear.component';
import { RecuperarComponent } from './recuperar-password/recuperar/recuperar.component';
import { VerificacionComponent } from './recuperar-password/verificacion/verificacion.component';

const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'inicio-sesion', component: InicioSesionComponent },
  { path: 'recuperar-password/recuperar', component: RecuperarComponent },
  { path: 'recuperar-password/crear', component: CrearComponent },
  { path: 'recuperar-password/verificacion', component: VerificacionComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
