import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent {
  constructor(
    private route: ActivatedRoute,
    private router: Router,
  ) {}
  productos = [
    { nombre: 'Producto 1', descripcion: 'Descripción del producto 1', precio: 50, cantidad: 1 },
    { nombre: 'Producto 2', descripcion: 'Descripción del producto 2', precio: 30, cantidad: 1 },
    { nombre: 'Producto 3', descripcion: 'Descripción del producto 3', precio: 40, cantidad: 1 },
    { nombre: 'Producto 4', descripcion: 'Descripción del producto 4', precio: 20, cantidad: 1 },
    { nombre: 'Producto 5', descripcion: 'Descripción del producto 5', precio: 60, cantidad: 1 }
  ];

  direccion = 'Cra. 33 # 33-33';
  departamento = 'Cundinamarca';
  ciudad = 'Bogotá';
  totalProductos = 120;
  costoDomicilio = 10;
  total = this.totalProductos + this.costoDomicilio;

  aumentarCantidad(producto) {
    producto.cantidad++;
    this.actualizarTotal();
  }

  disminuirCantidad(producto) {
    if (producto.cantidad > 1) {
      producto.cantidad--;
      this.actualizarTotal();
    }
  }

  actualizarTotal() {
    this.totalProductos = this.productos.reduce((acc, prod) => acc + (prod.precio * prod.cantidad), 0);
    this.total = this.totalProductos + this.costoDomicilio;
  }

  confirmarPedido() {
    alert('Pedido confirmado!');
    this.router.navigate(['/servicios']);
  }
}
