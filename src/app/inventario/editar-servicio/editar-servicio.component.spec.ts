import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormsModule } from '@angular/forms'; // Importa FormsModule
import { EditarServicioComponent } from './editar-servicio.component';
import { ServicesService } from 'src/app/service/services.service';

describe('EditarServicioComponent', () => {
  let component: EditarServicioComponent;
  let fixture: ComponentFixture<EditarServicioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditarServicioComponent],
      imports: [RouterTestingModule, HttpClientTestingModule, FormsModule], // Agrega FormsModule aquí
      providers: [ServicesService],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    });
    fixture = TestBed.createComponent(EditarServicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
