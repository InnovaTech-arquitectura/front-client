import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { shopItem } from 'src/app/model/shopItem';
import { EcommerceService } from 'src/app/service/ecommerce.service';
import { ShoppingCartService } from '../../service/shopping-cart.service';  // Asegúrate de importar correctamente

@Component({
  selector: 'app-info-product',
  templateUrl: './info-product.component.html',
  styleUrls: ['./info-product.component.css']
})
export class InfoProductComponent implements OnInit {

  constructor(
    private ecommerceService: EcommerceService,
    private route: ActivatedRoute,
    private shoppingCartService: ShoppingCartService  // Asegúrate de usar el nombre correcto
  ) { 
    this.product = {
      id: 0,
      name: '',
      price: 0,
      description: '',
      image: ''
    };
  }

  product: shopItem;

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const id = Number(params.get('id'));

      this.ecommerceService.findProductById(id).subscribe(
        (data) => {
          this.product = data;
        }
      );
    });
  }

  addToCart(product: shopItem): void {
    this.shoppingCartService.agregarItemAlCarrito(product).subscribe(
      response => {
        // Aquí puedes agregar lógica adicional, como mostrar un mensaje o actualizar el carrito
        console.log('Producto añadido al carrito:', response);
      },
      error => {
        console.error('Error al añadir el producto al carrito:', error);
      }
    );
  }
}
