import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { shopItem } from 'src/app/model/shopItem';
import { EcommerceService } from 'src/app/service/ecommerce.service';

@Component({
  selector: 'app-buy-services-na',
  templateUrl: './buy-services-na.component.html',
  styleUrls: ['./buy-services-na.component.css']
})
export class BuyServicesNaComponent implements OnInit {
  constructor(
    private router: Router,
    private ecommerceService: EcommerceService
  ) {}

  serviceList: shopItem[];

  ngOnInit() {
    this.ecommerceService.findServices().subscribe(
      (data) => {
        this.serviceList = data;
        console.log(data);
      }
    );
  }

  info(id: number) {
    this.router.navigate(['view/servicios/' + id]);
  }
}
