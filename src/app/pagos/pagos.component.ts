import { Component } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-pagos',
  templateUrl: './pagos.component.html',
  styleUrls: ['./pagos.component.css']
})
export class PagosComponent {

  confirmPayment(): void {
    Swal.fire({
      icon: 'success',
      title: 'Gracias por su compra',
      text: 'Su pedido ha sido confirmado',
    });
  }

}
