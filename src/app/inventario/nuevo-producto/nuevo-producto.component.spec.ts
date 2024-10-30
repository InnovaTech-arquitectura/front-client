import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing'; // Importa HttpClientTestingModule
import { NuevoProductoComponent } from './nuevo-producto.component';
import { ProductsService } from 'src/app/service/products.service'; // Importa el servicio

describe('NuevoProductoComponent', () => {
  let component: NuevoProductoComponent;
  let fixture: ComponentFixture<NuevoProductoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NuevoProductoComponent],
      imports: [RouterTestingModule, HttpClientTestingModule], // Agrega HttpClientTestingModule aquí
      providers: [ProductsService], // Agrega ProductsService como proveedor
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    });
    fixture = TestBed.createComponent(NuevoProductoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
