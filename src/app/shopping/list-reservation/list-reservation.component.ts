import { Component, OnInit  } from '@angular/core';
import { Reserva } from '../../reserva.model';
import { ReservaService } from '../../service/reserva.service';

@Component({
  selector: 'app-list-reservation',
  templateUrl: './list-reservation.component.html',
  styleUrls: ['./list-reservation.component.css']
})
export class ListReservationComponent implements OnInit {
  reservas: Reserva[] = [];

  constructor(private reservaService: ReservaService) {}

  ngOnInit(): void {
    this.loadReservas();
  }

  loadReservas(): void {
    this.reservaService.getAllReservas().subscribe((data: Reserva[]) => {
      this.reservas = data;
    });
  }
}
