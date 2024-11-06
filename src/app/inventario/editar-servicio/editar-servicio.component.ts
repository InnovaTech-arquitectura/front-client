import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServicesService } from 'src/app/service/services.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-editar-servicio',
  templateUrl: './editar-servicio.component.html',
  styleUrls: ['./editar-servicio.component.css']
})
export class EditarServicioComponent implements OnInit {

  servicio: any = {
    name: '',
    price: null,
    initialDate: '',
    finalDate: '',
    description: '',
    imageUrl: '',
  };

  imagePreview: string | ArrayBuffer | null = null;
  selectedFile: File | null = null;

  constructor(
    private route: ActivatedRoute,
    private servicesService: ServicesService,
    private router: Router
  ) { }

  ngOnInit(): void {
    const servicioId = +this.route.snapshot.paramMap.get('id')!;
    this.loadService(servicioId);
  }

  loadService(id: number): void {
    this.servicesService.findService(id).subscribe(
      (data) => {
        this.servicio = data;
        
        this.imagePreview = this.servicio.imageUrl;  // Si tiene una URL de imagen, la mostramos en la vista previa
      },
      (error) => {
        console.error('Error al cargar el servicio:', error);
      }
    );
  }

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
    const servicioId = +this.route.snapshot.paramMap.get('id')!;

    if (!this.selectedFile) {
      Swal.fire('Error', 'No se ha seleccionado una imagen', 'error');
      return;
    }

    const name = (document.getElementById('nombre') as HTMLInputElement)?.value; 
    if (!name) {
      Swal.fire('Error', 'El nombre es requerido', 'error');
      return;
    }

    const price = (document.getElementById('precio') as HTMLInputElement)?.value;
    if (!price) {
      Swal.fire('Error', 'El precio es requerido', 'error');
      return;
    }
    
    const initialDate = (document.getElementById('initialDate') as HTMLInputElement)?.value;
    if (!initialDate) {
      Swal.fire('Error', 'La fecha inicial es requerida', 'error');
      return;
    }
    
    const finalDate = (document.getElementById('finalDate') as HTMLInputElement)?.value;
    if (!finalDate) {
      Swal.fire('Error', 'La fecha final es requerida', 'error');
      return;
    }
    
    const description = (document.getElementById('description') as HTMLInputElement)?.value;
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

    this.servicesService.editService(servicioId, formData).subscribe(
      () => {
        Swal.fire('Éxito', 'El servicio se actualizo correctamente', 'success');
        this.router.navigate(['/inventario']);
      },
      (error) => {
        Swal.fire('Error', 'No se pudo actualizar el servicio', 'error');
      }
    );
  }
}
