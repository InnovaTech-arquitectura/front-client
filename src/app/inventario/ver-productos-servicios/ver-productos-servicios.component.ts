import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { ProductsService } from 'src/app/service/products.service';
import { ServicesService } from 'src/app/service/services.service';
import Swal from 'sweetalert2';

@Component({
	selector: 'app-ver-productos-servicios',
	templateUrl: './ver-productos-servicios.component.html',
	styleUrls: ['./ver-productos-servicios.component.css']
})
export class VerProductosServiciosComponent implements OnInit {

	productos: any[] = [];
  productosPaginados: any[] = [];
	
  servicios: any[] = [];
  serviciosPaginados: any[] = [];

	totalProducts = 0;
	totalServices = 0;
	pageSize = 5;
	pageIndexProducts = 0;
	pageIndexServices = 0;

	constructor(
		private productsService: ProductsService,
		private servicesService: ServicesService
	) { }

	ngOnInit(): void {
		this.pageIndexProducts = 0;
    this.pageIndexServices = 0;
    this.listProducts(this.pageIndexProducts, this.pageSize);
		this.listServices(this.pageIndexServices, this.pageSize);
	}

	listProducts(page: number, size: number) {
		this.productsService.listProducts(this.pageIndexProducts, size).subscribe(data => {
			console.log(data);      
      this.productos = data;
			this.totalProducts = data.totalElements;
		}, error => {
			console.error('Error fetching products:', error);
		});
	}

	listServices(page: number, size: number) {
		this.servicesService.listServices(page, size).subscribe(data => {
			this.servicios = data;
			this.totalServices = data.totalElements;
		}, error => {
			console.error('Error fetching services:', error);
		});
	}

	handleProductsPageEvent(event: PageEvent): void {
		this.pageIndexProducts = event.pageIndex;
    this.pageSize = event.pageSize;
		this.listProducts(this.pageIndexProducts, this.pageSize);
	}

	handleServicesPageEvent(event: PageEvent): void {
		this.pageIndexServices = event.pageIndex;
    this.pageSize = event.pageSize;
		this.listServices(this.pageIndexServices, this.pageSize);
	}

  paginarProductos(): void {
		const startIndex = this.pageIndexProducts * this.pageSize;
		const endIndex = startIndex + this.pageSize;
		this.productosPaginados = this.productos.slice(startIndex, endIndex);
	}

  paginarServicios(): void {
    const startIndex = this.pageIndexServices * this.pageSize;
    const endIndex = startIndex + this.pageSize;
    this.serviciosPaginados = this.servicios.slice(startIndex, endIndex);
  }

  deleteProduct(id: number) {
	Swal.fire({
	  title: '¿Estás seguro?',
	  text: '¡No podrás deshacer esta acción!',
	  icon: 'warning',
	  showCancelButton: true,
	  confirmButtonColor: '#3085d6',
	  cancelButtonColor: '#d33',
	  confirmButtonText: 'Sí, eliminar',
	  cancelButtonText: 'Cancelar'
	}).then((result) => {
	  if (result.isConfirmed) {
		this.productsService.deleteProduct(id).subscribe(
		  () => {
			Swal.fire('Eliminado', 'El producto ha sido eliminado', 'success');
			this.listProducts(this.pageIndexProducts, this.pageSize);
		  },
		  (error) => {
			if (error.status === 200) {
			  // Si el estado es 200 pero Angular lo interpreta como un error, actúa como éxito
			  Swal.fire('Eliminado', 'El producto ha sido eliminado', 'success');
			  this.listProducts(this.pageIndexProducts, this.pageSize);
			} else {
			  // Muestra un mensaje de error solo si el código de estado es diferente
			  console.error('Error deleting product:', error);
			  Swal.fire('Error', 'Hubo un problema al eliminar el producto', 'error');
			}
		  }
		);
	  }
	});
  }
  
  deleteService(id: number) {
	Swal.fire({
	  title: '¿Estás seguro?',
	  text: '¡No podrás deshacer esta acción!',
	  icon: 'warning',
	  showCancelButton: true,
	  confirmButtonColor: '#3085d6',
	  cancelButtonColor: '#d33',
	  confirmButtonText: 'Sí, eliminar',
	  cancelButtonText: 'Cancelar'
	}).then((result) => {
	  if (result.isConfirmed) {
		this.servicesService.deleteService(id).subscribe(
		  () => {
			Swal.fire('Eliminado', 'El servicio ha sido eliminado', 'success');
			this.listServices(this.pageIndexServices, this.pageSize);
		  },
		  (error) => {
			if (error.status === 200) {
			  Swal.fire('Eliminado', 'El servicio ha sido eliminado', 'success');
			  this.listServices(this.pageIndexServices, this.pageSize);
			} else {
			  console.error('Error deleting service:', error);
			  Swal.fire('Error', 'Hubo un problema al eliminar el servicio', 'error');
			}
		  }
		);
	  }
	});
  }
  
  
}
