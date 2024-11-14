import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ServicesService } from '../../service/services.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-nuevo-servicio',
  templateUrl: './nuevo-servicio.component.html',
  styleUrls: ['./nuevo-servicio.component.css']
})
export class NuevoServicioComponent {

  imagePreview: string | ArrayBuffer | null = null;
	selectedFile: File | null = null;

  constructor(
    private servicesService: ServicesService,
    private router: Router
  ) {}

  onImageSelected(event: Event): void {
    const file = (event.target as HTMLInputElement).files?.[0];
    if (file) {
      this.selectedFile = file;

      const reader = new FileReader();
      reader.onload = () => {
        this.imagePreview = reader.result;
      };
      reader.readAsDataURL(file);
    } else {
      Swal.fire('Error', 'No se ha seleccionado un archivo', 'error');
    }
  }

  onSubmit(): void {
    if (!this.selectedFile) {
      Swal.fire('Error', 'No se ha seleccionado una imagen', 'error');
      return;
    }

    const name = (document.getElementById('nombre') as HTMLInputElement)?.value; 
    if (!name) {
      Swal.fire('Error', 'El nombre es requerido', 'error');
      return;
    }

    const price = (document.getElementById('ValorUnidad') as HTMLInputElement)?.value;
    if (!price) {
      Swal.fire('Error', 'El precio es requerido', 'error');
      return;
    }
    
    const initialDate = (document.getElementById('initialDate') as HTMLInputElement)?.value;
    //console.log(initialDate);
    if (!initialDate) {
      Swal.fire('Error', 'La fecha inicial es requerida', 'error');
      return;
    }
    
    const finalDate = (document.getElementById('initialDate') as HTMLInputElement)?.value;
    if (!finalDate) {
      Swal.fire('Error', 'La fecha final es requerida', 'error');
      return;
    }

    const description = (document.getElementById('descripcion') as HTMLInputElement)?.value;
    if (!description) {
      Swal.fire('Error', 'La descripción es requerida', 'error');
      return;
    }

    const idUser = localStorage.getItem('userId');

    const formData = new FormData();
    formData.append('name', name);
    formData.append('price', price);
    formData.append('initialDate', initialDate);
    formData.append('finalDate', finalDate);
    formData.append('description', description);
    formData.append('picture', this.selectedFile);
    formData.append('IdUser_Entity', idUser);

    //console.log(formData);

    this.servicesService.createService(formData).subscribe(
      (response) => {
        Swal.fire('Éxito', 'Servicio creado correctamente', 'success');
        this.router.navigate(['/inventario']);
      },
      () => Swal.fire('Error', 'Ha ocurrido un error', 'error')
    );
  }

}
