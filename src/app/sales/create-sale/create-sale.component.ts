import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-create-sale',
  templateUrl: './create-sale.component.html',
  styleUrls: ['./create-sale.component.css']
})
export class CreateSaleComponent {
 
  //formCourse: Course;
  productos: string[] = ['producto1', 'producto2', 'producto3'];


  constructor(
    private route: ActivatedRoute,
    private router: Router,
  ) {
    /*this.sendCourse = {
      id: 0,
      link: '',
      description: '',
      score: 0,
      date: new Date(),
      title: '',
      places: 0,
      modality: '',
    };

    this.formCourse = {
      id: 0,
      link: '',
      description: '',
      score: 0,
      date: new Date(),
      title: '',
      places: 0,
      modality: '',
    };*/
  }

  crear() {
    this.router.navigate(['/ventas']);
   /* this.sendCourse = Object.assign({}, this.formCourse);
    console.log(this.sendCourse);

    this.courseService.addCourse(this.sendCourse).subscribe(
      (response) => {
        // Si es exitoso, se redirige
        Swal.fire({
          icon: 'success',
          title: 'Capacitación creada con éxito',
          showConfirmButton: false,
          timer: 1500
        }).then(() => {
          this.router.navigate(['/capacitaciones']);
        });
      },
      (error) => {
        // El error ya se maneja en el servicio, no redirigir en caso de error
        console.error('Error al crear capacitación', error);
      }
    );*/
  }
}

