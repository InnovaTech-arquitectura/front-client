import { Component, OnInit } from '@angular/core';
import { shoppingCartItem } from 'src/app/model/shoppingCartItem';
import { ShoppingCartService } from '../../service/shopping-cart.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  direccion = 'Cra. 33 # 33-33';
  departamento = 'Cundinamarca';
  ciudad = 'Bogotá';
  totalProductos = 120;
  costoDomicilio = 10;
  total = 0;

  constructor(
    private shoppingCartService: ShoppingCartService,
  ) {}

  cartProducts: shoppingCartItem[] = [];

  ngOnInit() {
    this.shoppingCartService.obtenerItems().subscribe(
      (data) => {
        this.cartProducts = data;
        this.actualizarTotal();  // Para calcular el total al cargar productos
      }
    );
  }

  // Función para aumentar la cantidad de un producto en el carrito
  aumentarCantidad(producto: shoppingCartItem) {
    producto.quantity++;
    this.shoppingCartService.actualizarCantidadProducto(producto.id, producto.quantity).subscribe(
      () => {
        this.actualizarTotal();  // Recalcular el total después de la actualización
      },
      (error) => {
        console.error('Error actualizando la cantidad:', error);
      }
    );
  }

  // Función para disminuir la cantidad de un producto en el carrito
  disminuirCantidad(producto: shoppingCartItem) {
    if (producto.quantity > 1) {
      producto.quantity--;
      this.shoppingCartService.actualizarCantidadProducto(producto.id, producto.quantity).subscribe(
        () => {
          this.actualizarTotal();  // Recalcular el total después de la actualización
        },
        (error) => {
          console.error('Error actualizando la cantidad:', error);
        }
      );
    }
  }

  // Función para actualizar el total del carrito
  actualizarTotal() {
    this.totalProductos = this.cartProducts.reduce((acc, prod) => acc + (prod.price * prod.quantity), 0);
    this.total = this.totalProductos + this.costoDomicilio;
  }

  confirmarPedido() {
    alert('¡Pedido confirmado!');
  }
}
