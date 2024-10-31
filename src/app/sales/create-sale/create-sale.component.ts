import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SalesService } from 'src/app/service/sales.service';
import { ProductsService } from 'src/app/service/products.service';
import { infoSale } from 'src/app/model/infoSale';
import Swal from 'sweetalert2';

@Component({
	selector: 'app-create-sale',
	templateUrl: './create-sale.component.html',
	styleUrls: ['./create-sale.component.css']
})
export class CreateSaleComponent {
	constructor(
		private route: ActivatedRoute,
		private router: Router,
		private salesService: SalesService,
		private productsService: ProductsService
	) {}

	infoSale: infoSale = {
		product: {
			id: 0,
			name: "",
			quantity: 0,
			price: 0,
			cost: 0,
			description: ""
		},
		quantitySold: 0,
		saleNumber: "",
	};

	producto: any = {
		id: 0,
		name: '',
		quantity: 0,
		price: 0,
		cost: 0,
		description: '',
		picture: '',
	};

	onSubmit() {
		const prodID = (document.getElementById('IDproducto') as HTMLInputElement)?.value;
		if (!prodID) {
			Swal.fire('Error', 'El ID del producto es requerido', 'error');
			return;
		}

		const quantity = (document.getElementById('cantidad') as HTMLInputElement)?.value;
		if (!quantity) {
			Swal.fire('Error', 'La cantidad es requerida', 'error');
			return;
		}

		const saleNumber = (document.getElementById('numeroVenta') as HTMLInputElement)?.value;
		if (!saleNumber) {
			Swal.fire('Error', 'El número de venta es requerido', 'error');
			return;
		}

		const prodIDNumber = Number(prodID);

		this.productsService.findProduct(prodIDNumber).subscribe(
			(data) => {
				this.producto = data;

				this.infoSale.product.id = this.producto.id;
				this.infoSale.product.name = this.producto.name;
				this.infoSale.product.quantity = this.producto.quantity;
				this.infoSale.product.price = this.producto.price;
				this.infoSale.product.cost = this.producto.cost;
				this.infoSale.product.description = this.producto.description;
				this.infoSale.quantitySold = Number(quantity);
				this.infoSale.saleNumber = saleNumber;
		
				this.salesService.addSale(this.infoSale).subscribe(
					(response) => {
						Swal.fire('Exito', 'Venta creada con éxito', 'success');
						this.router.navigate(['/ventas']);
					},
					(error) => {
						Swal.fire('Error', 'Error al crear la venta', 'error');
					}
				);

			},
			(error) => {
				console.error('Error fetching product details:', error);
			}
		);

	}
}
