import { Component, OnInit } from '@angular/core';
import { supplier } from 'src/app/model/supplier';
import { SupplierService } from 'src/app/service/supplier.service';

@Component({
  selector: 'app-info-producto',
  templateUrl: './info-producto.component.html',
  styleUrls: ['./info-producto.component.css']
})
export class InfoProductoComponent implements OnInit {

  constructor(
    private supplierService: SupplierService
  ) { }

  supplierList: supplier[];

  ngOnInit(): void {
    this.supplierService.findAll().subscribe(
      (data) => {
        this.supplierList = data;
      }
    );
  }

}
