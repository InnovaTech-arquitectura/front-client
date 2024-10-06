import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VerBazaresComponent } from './bazares/ver-bazares/ver-bazares.component';
import { DetallesBazarComponent } from './bazares/detalles-bazar/detalles-bazar.component';

const routes: Routes = [
  { path: 'bazares', component: VerBazaresComponent },
  { path: 'bazares/:id', component: DetallesBazarComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
