import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { InicioSesionComponent } from './inicio-sesion/inicio-sesion.component'; // Adjust path if needed

const routes: Routes = [
  { path: '', component: LandingPageComponent }, // Default route
  { path: 'inicio-sesion', component: InicioSesionComponent }, // Route for login
  // Add other routes as needed
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
