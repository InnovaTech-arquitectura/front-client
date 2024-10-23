import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { Order } from 'src/app/model/order';
import { Pedido } from 'src/app/pedido.model';
import { PedidoService } from 'src/app/service/pedido.service';

@Component({
  selector: 'app-list-orders',
  templateUrl: './list-orders.component.html',
  styleUrls: ['./list-orders.component.css']
})
export class ListOrdersComponent implements OnInit{

    orders: Order[] = [];

	paginatedOrders: Order[] = [];

	length = 0;
	pageSize = 4;
	pageIndex = 0;

  constructor(private pedidoService: PedidoService) {}

  ngOnInit(): void {
    this.pageIndex = 0;
		console.log(this.pageIndex);
		this.getOrders(this.pageIndex, this.pageSize);
		console.log(this.length);
  }

getOrders(pageIndex: number, pageSize: number): void {
  this.pedidoService.getAllPedidos(pageIndex, pageSize).subscribe((data: any) => {
    this.orders = data.content;
    this.length = data.totalElements;
  });
}


  handlePageEvent(event: PageEvent): void {
		this.pageIndex = event.pageIndex;
		this.pageSize = event.pageSize;
		this.getOrders(this.pageIndex, this.pageSize);
	}

	paginarBazares(): void {
		const startIndex = this.pageIndex * this.pageSize;
		const endIndex = startIndex + this.pageSize;
		this.paginatedOrders = this.orders.slice(startIndex, endIndex);
	}

	delete(id: number): void {
		this.pedidoService.deletePedido(id).subscribe(() => {
			this.getOrders(this.pageIndex, this.pageSize);
		});
	}

}
