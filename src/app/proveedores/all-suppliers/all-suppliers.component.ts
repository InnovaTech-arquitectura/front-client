import { Component, OnInit } from '@angular/core';
import { supplier } from 'src/app/model/supplier';
import { SupplierService } from 'src/app/service/supplier.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-all-suppliers',
  templateUrl: './all-suppliers.component.html',
  styleUrls: ['./all-suppliers.component.css']
})
export class AllSuppliersComponent implements OnInit {
  constructor(
    private supplierService: SupplierService
  ) { }

  supplierList: supplier[];

  ngOnInit(): void {
    this.supplierService.findAll().subscribe(
      (data) => {
        this.supplierList = data;
      }
    );
  }

  delete(id: number){

    Swal.fire({
      title: '¿Estás seguro?',
      text: "No podrás revertir esta acción",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sí, eliminar',
			confirmButtonColor: '#e15554',
      cancelButtonText: 'Cancelar',
      cancelButtonColor: '#91918f',
      reverseButtons: true,
    }).then((result) => {
      if (result.isConfirmed) {
        // Si el usuario confirma, llamamos al servicio para eliminar el plan
        this.supplierService.deleteSupplier(id).subscribe(
          response => {
            // Eliminación exitosa
            console.log('Plan eliminado', response);
            
            // Eliminamos el plan de la lista local (en el front)
            const index = this.supplierList.findIndex((plan) => plan.id === id);
            if (index !== -1) {
              this.supplierList.splice(index, 1);
            }
  
            // Mostramos el pop-up de éxito
            Swal.fire({
              title: 'Eliminado',
              text: 'El proveedor ha sido eliminado correctamente.',
              icon: 'success',
              confirmButtonText: 'Aceptar',
              confirmButtonColor: '#19647e'
            });
          },
          error => {
            // Si ocurre un error, mostramos el pop-up de error
            Swal.fire({
              title: 'Error',
              text: 'Hubo un problema al eliminar el proveedor. Por favor, intenta nuevamente.',
              icon: 'error',
              confirmButtonText: 'Aceptar',
              confirmButtonColor: '#19647e'
            });
            console.error(error);
          }
        );
      }
    });
  }
}
