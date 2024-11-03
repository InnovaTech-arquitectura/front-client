import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { shopItem } from 'src/app/model/shopItem';
import { EcommerceService } from 'src/app/service/ecommerce.service';

@Component({
  selector: 'app-info-product-na',
  templateUrl: './info-product-na.component.html',
  styleUrls: ['./info-product-na.component.css']
})
export class InfoProductNaComponent implements OnInit {

  constructor(
    private ecommerceService: EcommerceService,
    private route: ActivatedRoute
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
          console.log(data);
          this.product = data;
        }
      );
		});
  }
}