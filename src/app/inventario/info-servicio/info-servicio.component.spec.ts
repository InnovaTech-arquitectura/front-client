import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing'; // Importa HttpClientTestingModule
import { InfoServicioComponent } from './info-servicio.component';
import { ServicesService } from 'src/app/service/services.service'; // Importa el servicio ServicesService

describe('InfoServicioComponent', () => {
  let component: InfoServicioComponent;
  let fixture: ComponentFixture<InfoServicioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InfoServicioComponent],
      imports: [RouterTestingModule, HttpClientTestingModule], // Agrega HttpClientTestingModule aquí
      providers: [ServicesService], // Agrega ServicesService como proveedor
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    });
    fixture = TestBed.createComponent(InfoServicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
