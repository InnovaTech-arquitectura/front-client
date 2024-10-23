import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-detalles-bazar',
  templateUrl: './detalles-bazar.component.html',
  styleUrls: ['./detalles-bazar.component.css']
})
export class DetallesBazarComponent implements OnInit {
  bazar: any;

  constructor(private http: HttpClient, private route: ActivatedRoute) { }

  ngOnInit(): void {

    this.route.paramMap.subscribe((params) => {
      const id = Number(params.get('id'));
      this.getBazarDetails(id.toString());
		});
  }



  getBazarDetails(id: string) {
    this.http.get<any>(`http://localhost:8080/api/bazares/${id}`)
      .subscribe(data => {
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
