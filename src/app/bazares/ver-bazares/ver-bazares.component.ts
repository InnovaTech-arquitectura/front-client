import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ver-bazares',
  templateUrl: './ver-bazares.component.html',
  styleUrls: ['./ver-bazares.component.css']
})
export class VerBazaresComponent implements OnInit {
  bazares: any[] = [];

  ngOnInit(): void {
    this.bazares = [
      { id: '###01', name: '####', startDate: '##/##/####', endDate: '##/##/####', modality: '####', quota: '####' },
      { id: '###02', name: '####', startDate: '##/##/####', endDate: '##/##/####', modality: '####', quota: '####' },
      { id: '###03', name: '#####', startDate: '##/##/####', endDate: '##/##/####', modality: '#####', quota: '#####' },
      { id: '###04', name: '####', startDate: '##/##/####', endDate: '##/##/####', modality: '####', quota: '####' },
      { id: '###05', name: '#####', startDate: '##/##/####', endDate: '##/##/####', modality: '#####', quota: '#####' },
    ];
  }
}
