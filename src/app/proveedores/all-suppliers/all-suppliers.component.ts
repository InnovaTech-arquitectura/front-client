import { Component, OnInit } from '@angular/core';
import { supplier } from 'src/app/model/supplier';
import { SupplierService } from 'src/app/service/supplier.service';

@Component({
  selector: 'app-all-suppliers',
  templateUrl: './all-suppliers.component.html',
  styleUrls: ['./all-suppliers.component.css']
})
export class AllSuppliersComponent implements OnInit {
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
