import { Component, OnInit } from '@angular/core';
import { PedidoService } from '../../service/pedido.service'; // Asegúrate de importar correctamente el servicio
import { Pedido } from '../../pedido.model'; // Asegúrate de importar el modelo

@Component({
  selector: 'app-list-orders-client',
  templateUrl: './list-orders-client.component.html',
  styleUrls: ['./list-orders-client.component.css']
})
export class ListOrdersClientComponent implements OnInit {
  pedidos: Pedido[] = [];

  constructor(private pedidoService: PedidoService) {}

  ngOnInit(): void {
    this.loadPedidos();
  }

  loadPedidos(): void {
    this.pedidoService.getAllPedidos().subscribe((data: Pedido[]) => {
      this.pedidos = data;
    });
  }
}
 