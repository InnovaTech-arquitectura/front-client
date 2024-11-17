import { Component, OnInit } from '@angular/core';
import { PedidoService } from '../../service/pedido.service';
import { Pedido } from '../../pedido.model';
import { PageEvent } from '@angular/material/paginator';
import { PedidoCliente } from 'src/app/model/pedido-cliente';

@Component({
  selector: 'app-list-orders-client',
  templateUrl: './list-orders-client.component.html',
  styleUrls: ['./list-orders-client.component.css']
})
export class ListOrdersClientComponent implements OnInit {
  orders: PedidoCliente[] = [];
	paginatedOrders: PedidoCliente[] = [];

	length = 0;
	pageSize = 4;
	pageIndex = 0;

  constructor(private pedidoService: PedidoService) {}

  ngOnInit(): void {
    this.getOrders(this.pageIndex, this.pageSize);
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
