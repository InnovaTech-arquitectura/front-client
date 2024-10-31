import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from 'src/app/service/products.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-editar-producto',
  templateUrl: './editar-producto.component.html',
  styleUrls: ['./editar-producto.component.css']
})
export class EditarProductoComponent implements OnInit {

  producto: any = {
    name: '',
    quantity: null,
    price: null,
    cost: null,
    description: '',
    imageUrl: '',
  };
  imagePreview: string | ArrayBuffer | null = null;
  selectedFile: File | null = null;

  constructor(
    private route: ActivatedRoute,
    private productsService: ProductsService,
    private router: Router
  ) { }

  ngOnInit(): void {
    const productId = +this.route.snapshot.paramMap.get('id')!;
    this.loadProduct(productId);
  }

  loadProduct(id: number): void {
    this.productsService.finfindProduct(id).subscribe(
      (data) => {
        this.producto = data;
        
        this.imagePreview = this.producto.imageUrl;  // Si tiene una URL de imagen, la mostramos en la vista previa
      },
      (error) => {
        console.error('Error al cargar el producto:', error);
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
    const productId = +this.route.snapshot.paramMap.get('id')!;

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
    const idUser = "1";// Cambiar por el id del usuario logueado
    

    const formData = new FormData();
    formData.append('name', name);
    formData.append('quantity', quantity);
    formData.append('price', price);
    formData.append('cost', cost);
    formData.append('description', description);
    formData.append('picture', this.selectedFile);
    formData.append('IdUser_Entity', idUser);

    console.log(formData);
    
    this.productsService.editProduct(productId, formData).subscribe(
      (response) => {
        Swal.fire('Éxito', 'Producto actualizado con éxito', 'success');
        this.router.navigate(['/inventario']);  // Navega de vuelta al inventario
      },
      (error) => {
        Swal.fire('Error', 'Error al actualizar el producto', 'error');
      }
    );
  }
}
