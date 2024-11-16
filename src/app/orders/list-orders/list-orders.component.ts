import { Component, OnInit } from '@angular/core';
import { PedidoService } from 'src/app/service/pedido.service';
import { PageEvent } from '@angular/material/paginator';
import { Order } from 'src/app/model/order';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-list-orders',
  templateUrl: './list-orders.component.html',
  styleUrls: ['./list-orders.component.css']
})
export class ListOrdersComponent implements OnInit {
  orders: Order[] = [];
  pageSize = 4;
  pageIndex = 0;
  length = 0;

  constructor(private pedidoService: PedidoService) {}

  ngOnInit(): void {
    this.getOrders(this.pageIndex, this.pageSize);
  }

  getOrders(pageIndex: number, pageSize: number): void {
    Swal.fire({
      title: 'Cargando pedidos...',
      text: 'Por favor espera.',
      allowOutsideClick: false,
      didOpen: () => {
        Swal.showLoading();
      }
    });

    this.pedidoService.getAllPedidos(pageIndex, pageSize).subscribe(
      (data: Order[]) => {
        console.log('Datos recibidos:', data);
        this.orders = data;
        Swal.close();
      },
      (error) => {
        console.error('Error al cargar pedidos:', error);
        Swal.fire({
          title: 'Error',
          text: 'No se pudieron cargar los pedidos.',
          icon: 'error',
          confirmButtonText: 'Aceptar'
        });
      }
    );
  }

  handlePageEvent(event: PageEvent): void {
    this.pageIndex = event.pageIndex;
    this.pageSize = event.pageSize;
    this.getOrders(this.pageIndex, this.pageSize);
  }

  deleteOrder(id: number): void {
    Swal.fire({
      title: '¿Estás seguro?',
      text: 'No podrás revertir esta acción.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, eliminar'
    }).then((result) => {
      if (result.isConfirmed) {
        this.pedidoService.deletePedido(id).subscribe(
          () => {
            Swal.fire(
              'Eliminado',
              'El pedido ha sido eliminado exitosamente.',
              'success'
            );
            this.getOrders(this.pageIndex, this.pageSize);
          },
          (error) => {
            console.error('Error al eliminar pedido:', error);
            Swal.fire({
              title: 'Error',
              text: 'No se pudo eliminar el pedido.',
              icon: 'error',
              confirmButtonText: 'Aceptar'
            });
          }
        );
      }
    });
  }
}
