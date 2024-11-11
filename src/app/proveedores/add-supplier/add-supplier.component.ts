import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { supplier } from 'src/app/model/supplier';
import { SupplierService } from 'src/app/service/supplier.service';

@Component({
  selector: 'app-add-supplier',
  templateUrl: './add-supplier.component.html',
  styleUrls: ['./add-supplier.component.css']
})
export class AddSupplierComponent {

  constructor(
    private router: Router,
    private supplierService: SupplierService
  ) {
      this.formSupply = {
        name: '',
        contact_number: '',
        description: '',
        products: []
      };
      this.sendSupply = {
        name: '',
        contact_number: '',
        description: '',
        products: []
      };
   }

  formSupply: supplier;
  sendSupply: supplier;

  addSupplier(): void {
    this.sendSupply = Object.assign({}, this.formSupply);
    //console.log(this.sendSupply);

    this.supplierService.addSupplier(this.sendSupply).subscribe(
      (response) => {
        //console.log(response);
        this.router.navigate(['/proveedores']);
      },
      error => {
        //console.error(error);
      }
    );
  }
}
