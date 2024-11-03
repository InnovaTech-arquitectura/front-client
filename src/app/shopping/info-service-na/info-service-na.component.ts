import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { shopItem } from 'src/app/model/shopItem';
import { EcommerceService } from 'src/app/service/ecommerce.service';

@Component({
  selector: 'app-info-service-na',
  templateUrl: './info-service-na.component.html',
  styleUrls: ['./info-service-na.component.css']
})
export class InfoServiceNaComponent implements OnInit {

  constructor(
    private ecommerceService: EcommerceService,
    private route: ActivatedRoute
  ) {
    this.service = {
      id: 0,
      name: '',
      price: 0,
      description: '',
      image: ''
    };
   }

  service: shopItem;

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
			const id = Number(params.get('id'));

			this.ecommerceService.findServiceById(id).subscribe(
        (data) => {
          console.log(data);
          this.service = data;
        }
      );
		});
  }

}
