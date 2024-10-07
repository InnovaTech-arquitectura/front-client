import { Component, OnInit } from '@angular/core';
import { Chart, ChartType } from 'chart.js/auto';

@Component({
  selector: 'app-entrepreneurship-stats',
  templateUrl: './entrepreneurship-stats.component.html',
  styleUrls: ['./entrepreneurship-stats.component.css']
})
export class EntrepreneurshipStatsComponent implements OnInit{
  
  public chart: Chart | undefined;
  public chart2: Chart | undefined;

  ngOnInit(): void {
    
    const data = {
      labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
      datasets: [{
        label: 'Air Jordan 1 Mid',
        data: [65, 59, 80, 81, 56, 55, 40, 65, 59, 80, 81, 56],
        backgroundColor: [
          'rgba(135, 188, 222)',
        ],
        fill: false,
        borderColor:
          'rgb(135, 188, 222)',
        tension: 0.1
      },
      {
        label: 'Air Jordan 1 High',
        data: [45, 47, 72, 69, 44, 33, 77, 12, 98, 103, 55, 23],
        backgroundColor: [
          'rgba(255, 202, 58)',
        ],
        fill: false,
        borderColor:
          'rgb(255, 202, 58)',
        tension: 0.1
      },
      {
        label: 'Air Jordan 1 Low',
        data: [23, 45, 67, 89, 12, 34, 56, 78, 90, 23, 45, 67],
        backgroundColor: [
          'rgba(255, 99, 132)',
        ],
        fill: false,
        borderColor:
          'rgb(255, 99, 132)',
        tension: 0.1
      }
    ]      
    };

    this.chart = new Chart('chart', {
      type: 'line',
      data: data
    });

  }

}
