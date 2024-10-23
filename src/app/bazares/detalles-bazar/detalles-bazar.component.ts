import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';
import { EventsService } from 'src/app/service/events.service';

@Component({
  selector: 'app-detalles-bazar',
  templateUrl: './detalles-bazar.component.html',
  styleUrls: ['./detalles-bazar.component.css']
})
export class DetallesBazarComponent implements OnInit {
  bazar: any;

  constructor(private eventsService: EventsService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const id = Number(params.get('id'));
      this.getBazarDetails(id);
    });
  }

  getBazarDetails(id: number) {
    this.eventsService.getBazarDetails(id).subscribe(data => {
      this.bazar = data;
    });
  }

  inscribirseAlBazar() {
    Swal.fire({
      icon: 'success',
      title: '¡Inscripción exitosa!',
      text: 'Te has inscrito correctamente al bazar.',
      confirmButtonText: 'OK'
    });
  }
}
