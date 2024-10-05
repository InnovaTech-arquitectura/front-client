import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component'; 
import { InicioSesionComponent } from './inicio-sesion/inicio-sesion.component'; 

const routes: Routes = [
  { path: '', component: LandingPageComponent }, // Landing page route
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
