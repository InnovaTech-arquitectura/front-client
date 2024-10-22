import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { shopItem } from 'src/app/model/shopItem';
import { EcommerceService } from 'src/app/service/ecommerce.service';

@Component({
  selector: 'app-info-product',
  templateUrl: './info-product.component.html',
  styleUrls: ['./info-product.component.css']
})
export class InfoProductComponent implements OnInit {

  constructor(
    private ecommerceService: EcommerceService,
    private route: ActivatedRoute
  ) { }

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