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
  length = 0;
  pageSize = 4;
  pageIndex = 0;

  constructor(private salesService: SalesService) {} // Inyectamos el servicio

  ngOnInit(): void {
    this.getSales(this.pageIndex, this.pageSize);
  }

  getSales(page: number, size: number) {
    this.salesService.getSales(page, size) // Usamos el servicio para obtener las ventas
      .subscribe(response => {
        this.sales = response.content;
        this.length = response.totalElements;
      }, error => {
        console.error('Error fetching sales:', error);
      });
  }

  handlePageEvent(event: PageEvent) {
    this.pageSize = event.pageSize;
    this.pageIndex = event.pageIndex;
    this.getSales(this.pageIndex, this.pageSize);
  }

}
