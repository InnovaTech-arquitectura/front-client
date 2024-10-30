import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing'; // Importa HttpClientTestingModule
import { VerProductosServiciosComponent } from './ver-productos-servicios.component';
import { ProductsService } from 'src/app/service/products.service'; // Importa el servicio ProductsService
import { ServicesService } from 'src/app/service/services.service'; // Importa el servicio ServicesService

describe('VerProductosServiciosComponent', () => {
  let component: VerProductosServiciosComponent;
  let fixture: ComponentFixture<VerProductosServiciosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VerProductosServiciosComponent],
      imports: [RouterTestingModule, HttpClientTestingModule], // Agrega HttpClientTestingModule aquí
      providers: [ProductsService, ServicesService], // Agrega ProductsService y ServicesService como proveedores
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    });
    fixture = TestBed.createComponent(VerProductosServiciosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
