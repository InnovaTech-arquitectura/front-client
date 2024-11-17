import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { SalesService } from 'src/app/service/sales.service';

@Component({
  selector: 'app-list-sales',
  templateUrl: './list-sales.component.html',
  styleUrls: ['./list-sales.component.css']
})
export class ListSalesComponent implements OnInit {
  sales: any[] = [];
  paginationSales: any[] = [];
  
  length = 0;
  pageSize = 4;
  pageIndex = 0;

  constructor(private salesService: SalesService) {} 

  ngOnInit(): void {
    this.pageIndex = 0;
    //console.log(this.pageIndex);
    this.getSales(this.pageIndex, this.pageSize);
    //console.log(this.length);
  }

  getSales(pageIndex: number, pageSize: number): void {
    this.salesService.getSales(pageIndex, pageSize)
    .subscribe((data: any) => {
        //console.log(data);
        this.sales = data.content;
        this.length = data.totalElements;
      }, error => {
        //console.error('Error fetching sales:', error);
      });
  }

  handlePageEvent(event: PageEvent): void {
    this.pageIndex = event.pageIndex;
    this.pageSize = event.pageSize;
    this.getSales(this.pageIndex, this.pageSize);
  }

  paginarVentas(): void {
    const startIndex = this.pageIndex * this.pageSize;
    const endIndex = startIndex + this.pageSize;
    this.paginationSales = this.sales.slice(startIndex, endIndex);
  }

}
