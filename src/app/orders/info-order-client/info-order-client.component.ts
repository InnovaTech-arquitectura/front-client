import { Component } from '@angular/core';

@Component({
  selector: 'app-info-order-client',
  templateUrl: './info-order-client.component.html',
  styleUrls: ['./info-order-client.component.css']
})
export class InfoOrderClientComponent {
  pedido = {
    id: 33,
    emprendimiento: 'ABCDEFG',
    precio: 333,
    estado: 'En camino',
    direccion: 'Cra. 33 # 33-33',
    departamento: 'Cundinamarca',
    ciudad: 'Bogotá'
  };

  // Lista de productos del pedido
  productos = [
    {
      nombre: 'Producto 1',
      descripcion: 'Descripción del producto 1',
      precio: '##.##'
    },
    {
      nombre: 'Producto 2',
      descripcion: 'Descripción del producto 2',
      precio: '##.##'
    },
    {
      nombre: 'Producto 3',
      descripcion: 'Descripción del producto 3',
      precio: '##.##'
    },
    {
      nombre: 'Producto 4',
      descripcion: 'Descripción del producto 4',
      precio: '##.##'
    },
    {
      nombre: 'Producto 5',
      descripcion: 'Descripción del producto 5',
      precio: '##.##'
    }
  ];

  constructor() { }

  ngOnInit(): void {
   
  }

}
