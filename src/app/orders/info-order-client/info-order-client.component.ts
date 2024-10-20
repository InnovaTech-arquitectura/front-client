import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PedidoService } from '../../service/pedido.service'; // Asegúrate de importar correctamente el servicio
import { Pedido } from '../../pedido.model'; // Asegúrate de importar el modelo

@Component({
  selector: 'app-info-order-client',
  templateUrl: './info-order-client.component.html',
  styleUrls: ['./info-order-client.component.css']
})
export class InfoOrderClientComponent implements OnInit {
  pedido!: Pedido; // Usar el modelo de Pedido
  productos = []; // Define tu lista de productos aquí, o la puedes obtener del backend

  constructor(
    private pedidoService: PedidoService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.loadPedido(id);
  }

  loadPedido(id: number): void {
    this.pedidoService.getPedidoById(id).subscribe((data: Pedido) => {
      this.pedido = data;
      // Aquí puedes cargar la lista de productos, si es necesario
    });
  }
}
