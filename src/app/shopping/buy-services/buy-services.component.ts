import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-buy-services',
  templateUrl: './buy-services.component.html',
  styleUrls: ['./buy-services.component.css']
})
export class BuyServicesComponent {
  constructor(private router: Router) {}

  info(id: number) {
    this.router.navigate(['/servicios/' + id]);
  }
}
