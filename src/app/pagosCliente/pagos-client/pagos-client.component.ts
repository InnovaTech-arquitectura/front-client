import { Component } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-pagos-client',
  templateUrl: './pagos-client.component.html',
  styleUrls: ['./pagos-client.component.css']
})
export class PagosClientComponent {

  confirmPayment(): void {
    Swal.fire({
      icon: 'success',
      title: 'Gracias por su compra',
      text: 'Su pedido ha sido confirmado',
    });
  }

}
