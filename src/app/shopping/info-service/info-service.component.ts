import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { shopItem } from 'src/app/model/shopItem';
import { EcommerceService } from 'src/app/service/ecommerce.service';

@Component({
  selector: 'app-info-service',
  templateUrl: './info-service.component.html',
  styleUrls: ['./info-service.component.css']
})
export class InfoServiceComponent implements OnInit {

  constructor(
    private ecommerceService: EcommerceService,
    private route: ActivatedRoute
  ) { }

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
