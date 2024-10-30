import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing'; // Importa HttpClientTestingModule
import { NuevoServicioComponent } from './nuevo-servicio.component';
import { ServicesService } from 'src/app/service/services.service'; // Importa el servicio ServicesService

describe('NuevoServicioComponent', () => {
  let component: NuevoServicioComponent;
  let fixture: ComponentFixture<NuevoServicioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NuevoServicioComponent],
      imports: [RouterTestingModule, HttpClientTestingModule], // Agrega HttpClientTestingModule aquí
      providers: [ServicesService], // Agrega ServicesService como proveedor
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    });
    fixture = TestBed.createComponent(NuevoServicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
