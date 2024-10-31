import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing'; // Importa HttpClientTestingModule
import { InfoProductoComponent } from './info-producto.component';
import { ProductsService } from 'src/app/service/products.service'; // Importa el servicio

describe('InfoProductoComponent', () => {
  let component: InfoProductoComponent;
  let fixture: ComponentFixture<InfoProductoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InfoProductoComponent],
      imports: [RouterTestingModule, HttpClientTestingModule], // Agrega HttpClientTestingModule aquí
      providers: [ProductsService], // Agrega ProductsService como proveedor
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    });
    fixture = TestBed.createComponent(InfoProductoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
