import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServicesService } from 'src/app/service/services.service';

@Component({
  selector: 'app-info-servicio',
  templateUrl: './info-servicio.component.html',
  styleUrls: ['./info-servicio.component.css']
})
export class InfoServicioComponent implements OnInit {
  
  servicio: any;

  constructor(
    private route: ActivatedRoute,
    private servicesService: ServicesService
  ) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id')!;
    this.loadProduct(id);
  }

  loadProduct(id: number): void {
    this.servicesService.findService(id).subscribe(
      data => {
        this.servicio = data;
      },
      error => {
        //console.error('Error fetching product details:', error);
      }
    );
  }
}
