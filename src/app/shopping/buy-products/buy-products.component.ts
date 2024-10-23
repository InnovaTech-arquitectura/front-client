import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { shopItem } from 'src/app/model/shopItem';
import { EcommerceService } from 'src/app/service/ecommerce.service';

@Component({
  selector: 'app-buy-products',
  templateUrl: './buy-products.component.html',
  styleUrls: ['./buy-products.component.css']
})
export class BuyProductsComponent implements OnInit {
  constructor(
    private router: Router,
    private ecommerceService: EcommerceService
  ) {}

  productsList: shopItem[];

  ngOnInit() {
    this.ecommerceService.findProducts().subscribe(
      (data) => {
        this.productsList = data;
        console.log(data);
      }
    );
  }

  info(id: number) {
    this.router.navigate(['/productos/' + id]);
  }
}