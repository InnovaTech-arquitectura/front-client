import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormsModule } from '@angular/forms'; // Importa FormsModule para ngModel
import { EditarProductoComponent } from './editar-producto.component';
import { ProductsService } from 'src/app/service/products.service';

describe('EditarProductoComponent', () => {
  let component: EditarProductoComponent;
  let fixture: ComponentFixture<EditarProductoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditarProductoComponent],
      imports: [RouterTestingModule, HttpClientTestingModule, FormsModule], // Agrega FormsModule aquí
      providers: [ProductsService],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    });
    fixture = TestBed.createComponent(EditarProductoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
