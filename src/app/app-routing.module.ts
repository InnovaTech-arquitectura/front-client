import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VerBazaresComponent } from './bazares/ver-bazares/ver-bazares.component';
import { DetallesBazarComponent } from './bazares/detalles-bazar/detalles-bazar.component';
import { InicioSesionComponent } from './inicio-sesion/inicio-sesion.component';
import { RegistroComponent } from './registro/registro.component';

const routes: Routes = [
  { path: 'login', component: InicioSesionComponent },
  { path: 'bazares', component: VerBazaresComponent },
  { path: 'bazares/:id', component: DetallesBazarComponent },
  { path: 'registro', component: RegistroComponent },
  { path: '', pathMatch: 'full', redirectTo: 'login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
