import { Component, OnInit } from '@angular/core'; 
import { ActivatedRoute } from '@angular/router';
import { PedidoService } from '../../service/pedido.service';
import { Pedido } from '../../pedido.model';
import { Producto } from '../../model/producto';

@Component({
  selector: 'app-info-order-client',
  templateUrl: './info-order-client.component.html',
  styleUrls: ['./info-order-client.component.css']
})
export class InfoOrderClientComponent implements OnInit {
  pedido: Pedido = {
    id: 0,
    emprendimiento: '',
    precio: 0,
    estado: '',
    direccion: '',
    departamento: '',
    ciudad: '',
    cliente: '',
    fecha: ''
  }; 
  
  productos: Producto[] = [];

  constructor(
    private pedidoService: PedidoService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.loadPedido(id);
    this.loadProductos(id);
  }
  
  // Cargar los detalles del pedido
  loadPedido(id: number): void {
    this.pedidoService.getPedidoById(id).subscribe((data: Pedido) => {
      this.pedido = data; 
    });
  }
  
  // Cargar los productos del pedido
  loadProductos(id: number): void {
    this.pedidoService.getPedidoProductos(id).subscribe((data: Producto[]) => {
      this.productos = data;
    });
  }
}
