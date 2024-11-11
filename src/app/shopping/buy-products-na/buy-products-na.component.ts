import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { shopItem } from 'src/app/model/shopItem';
import { EcommerceService } from 'src/app/service/ecommerce.service';

@Component({
  selector: 'app-buy-products-na',
  templateUrl: './buy-products-na.component.html',
  styleUrls: ['./buy-products-na.component.css']
})
export class BuyProductsNaComponent implements OnInit {
  constructor(
    private router: Router,
    private ecommerceService: EcommerceService
  ) {}

  productsList: shopItem[];

  ngOnInit() {
    this.ecommerceService.findProducts().subscribe(
      (data) => {
        this.productsList = data;
        //console.log(data);
      }
    );
  }

  info(id: number) {
    this.router.navigate(['view/productos/' + id]);
  }
}
