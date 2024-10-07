import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { InicioSesionComponent } from './inicio-sesion/inicio-sesion.component';
import { RegistroComponent } from './registro/registro.component';
import { VerBazaresComponent } from './bazares/ver-bazares/ver-bazares.component';
import { DetallesBazarComponent } from './bazares/detalles-bazar/detalles-bazar.component';
import { PagosComponent } from './pagos/pagos.component';
import { VerBazaresClienteComponent } from './bazares/ver-bazares-cliente/ver-bazares-cliente.component';
import { DetallesBazarClienteComponent } from './bazares/detalles-bazar-cliente/detalles-bazar-cliente.component';
import { BuyServicesComponent } from './shopping/buy-services/buy-services.component';
import { InfoServiceComponent } from './shopping/info-service/info-service.component';

import { VerProductosServiciosComponent } from './inventario/ver-productos-servicios/ver-productos-servicios.component';
import { NuevoProductoComponent } from './inventario/nuevo-producto/nuevo-producto.component';
import { EditarProductoComponent } from './inventario/editar-producto/editar-producto.component';
import { InfoProductoComponent } from './inventario/info-producto/info-producto.component';
import { InfoSupplierComponent } from './inventario/info-supplier/info-supplier.component';
import { NuevoServicioComponent } from './inventario/nuevo-servicio/nuevo-servicio.component';
import { EditarServicioComponent } from './inventario/editar-servicio/editar-servicio.component';
import { InfoServicioComponent } from './inventario/info-servicio/info-servicio.component';

const routes: Routes = [
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
  { path: '', pathMatch: 'full', redirectTo: 'login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
