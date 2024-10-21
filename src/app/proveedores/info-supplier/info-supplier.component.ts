import { Component, OnInit } from '@angular/core';
import { SupplierService } from 'src/app/service/supplier.service';
import { ActivatedRoute, Router } from '@angular/router';
import { supplier } from 'src/app/model/supplier';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-info-supplier',
  templateUrl: './info-supplier.component.html',
  styleUrls: ['./info-supplier.component.css']
})
export class InfoSupplierComponent implements OnInit {
  supplier: supplier;  // Almacena los datos actuales del proveedor
  editedSupplier: supplier = { name: '', contact_number: '', description: '', products: [] };  // Inicializa como un objeto vacío

  constructor(
    private supplierService: SupplierService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const supplierId = +this.route.snapshot.paramMap.get('id');
    this.supplierService.getSupplierById(supplierId).subscribe((data: supplier) => {
      this.supplier = data;

      // Inicializa los datos del formulario de edición con los datos actuales
      this.editedSupplier = {
        name: data.name,
        contact_number: data.contact_number,
        description: data.description,
        products: data.products ? data.products.map(product => product.id) : []  // Manejo de posible undefined
      };
      console.log('Supplier data loaded:', this.supplier);  // Verifica que se obtienen los datos correctamente
      console.log('Edited Supplier:', this.editedSupplier);  // Verifica que se inicializan correctamente
    }, error => {
      console.error('Error loading supplier data:', error);  // Manejo de errores
    });
  }

  saveChanges(): void {
    const supplierId = +this.route.snapshot.paramMap.get('id');

    // Verificar que al menos un campo se haya cambiado
    if (
      this.editedSupplier.name === this.supplier.name &&
      this.editedSupplier.contact_number === this.supplier.contact_number &&
      this.editedSupplier.description === this.supplier.description
    ) {
      Swal.fire({
        title: 'Error',
        text: 'Debes cambiar al menos un campo antes de guardar.',
        icon: 'warning',
        confirmButtonText: 'Aceptar',
        confirmButtonColor: '#19647e'
      });
      return; // Detener la ejecución si no se cambia ningún campo
    }

    // Validar que todos los campos estén llenos
    if (!this.editedSupplier.name || !this.editedSupplier.contact_number || !this.editedSupplier.description) {
      Swal.fire({
        title: 'Error',
        text: 'Por favor, llena todos los campos antes de guardar.',
        icon: 'warning',
        confirmButtonText: 'Aceptar',
        confirmButtonColor: '#19647e'
      });
      return; // Detener la ejecución si hay campos vacíos
    }

    // Asegúrate de que `products` sea un arreglo de números antes de enviar
    if (!this.editedSupplier.products) {
      this.editedSupplier.products = [];
    }

    this.supplierService.editSupplier(supplierId, this.editedSupplier).subscribe(
      response => {
        Swal.fire({
          title: 'Éxito',
          text: 'Los datos del proveedor se han actualizado correctamente.',
          icon: 'success',
          confirmButtonText: 'Aceptar',
          confirmButtonColor: '#19647e'
        }).then(() => {
          this.router.navigate(['/proveedores']);
        });
      },
      error => {
        Swal.fire({
          title: 'Error',
          text: 'Hubo un problema al actualizar el proveedor. Por favor, intenta nuevamente.',
          icon: 'error',
          confirmButtonText: 'Aceptar',
          confirmButtonColor: '#19647e'
        });
        console.error('Error updating supplier:', error);
      }
    );
  }
}
