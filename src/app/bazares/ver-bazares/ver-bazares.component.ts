import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { EventsService } from 'src/app/service/events.service';

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

  constructor(private eventsService: EventsService) {} // Inyectamos el servicio

  ngOnInit(): void {
    this.getBazares(this.pageIndex, this.pageSize);
  }

  getBazares(page: number, size: number) {
    this.eventsService.getBazares(page, size) // Usamos el servicio para obtener los bazares
      .subscribe(response => {
        this.bazares = response.content;
        this.length = response.totalElements;
      }, error => {
        console.error('Error fetching bazares:', error);
      });
  }

  handlePageEvent(event: PageEvent) {
    this.pageSize = event.pageSize;
    this.pageIndex = event.pageIndex;
    this.getBazares(this.pageIndex, this.pageSize);
  }
}
