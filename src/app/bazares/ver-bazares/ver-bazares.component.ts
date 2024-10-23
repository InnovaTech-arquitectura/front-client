import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-ver-bazares',
  templateUrl: './ver-bazares.component.html',
  styleUrls: ['./ver-bazares.component.css']
})
export class VerBazaresComponent implements OnInit {
  bazares: any[] = [];
  length = 0;
  pageSize = 4;
  pageIndex = 0;
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.getBazares(this.pageIndex, this.pageSize);
  }

  getBazares(page: number, size: number) {
    this.http.get<any>(`http://localhost:8080/api/bazares?page=${page}&size=${size}`)
      .subscribe(response => {
        this.bazares = response.content;
        this.length = response.totalElements;
      });
  }

  handlePageEvent(event: PageEvent) {
    this.pageSize = event.pageSize;
    this.pageIndex = event.pageIndex;
    this.getBazares(this.pageIndex, this.pageSize);
  }
}
