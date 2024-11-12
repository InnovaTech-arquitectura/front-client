import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductsService } from '../../service/products.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-nuevo-producto',
  templateUrl: './nuevo-producto.component.html',
  styleUrls: ['./nuevo-producto.component.css']
})
export class NuevoProductoComponent {  
  
  imagePreview: string | ArrayBuffer | null = null;
	selectedFile: File | null = null;

  constructor(
    private productsService: ProductsService,
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

    const quantity = (document.getElementById('stock') as HTMLInputElement)?.value;
    if (!quantity) {
      Swal.fire('Error', 'La cantidad es requerida', 'error');
      return;
    }
    
    const price = (document.getElementById('ValorUnidad') as HTMLInputElement)?.value;
    if (!price) {
      Swal.fire('Error', 'El precio es requerido', 'error');
      return;
    }
    
    const cost = (document.getElementById('costo') as HTMLInputElement)?.value;
    if (!cost) {
      Swal.fire('Error', 'El costo es requerido', 'error');
      return;
    }
    
    const description = (document.getElementById('descripcion') as HTMLInputElement)?.value;
    if (!description) {
      Swal.fire('Error', 'La descripción es requerida', 'error');
      return
    }
    const idUser = localStorage.getItem('userId');
    

    const formData = new FormData();
    formData.append('name', name);
    formData.append('quantity', quantity);
    formData.append('price', price);
    formData.append('cost', cost);
    formData.append('description', description);
    formData.append('picture', this.selectedFile);
    formData.append('IdUser_Entity', idUser);

    //console.log(formData);

    this.productsService.createProduct(formData).subscribe(
      (response) => {
        Swal.fire('Exito', 'Producto creado correctamente', 'success');
        this.router.navigate(['/inventario']);
      },
      (error) => {
        Swal.fire('Error', 'Error al crear el producto', 'error');
      }
    );
  }

}
