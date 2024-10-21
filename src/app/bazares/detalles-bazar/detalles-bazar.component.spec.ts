import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { DetallesBazarComponent } from './detalles-bazar.component';
import { HttpClientTestingModule } from '@angular/common/http/testing'; 
import { ActivatedRoute } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing'; // Importa RouterTestingModule
import { of } from 'rxjs';

describe('DetallesBazarComponent', () => {
  let component: DetallesBazarComponent;
  let fixture: ComponentFixture<DetallesBazarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetallesBazarComponent],
      imports: [
        HttpClientTestingModule,
        RouterTestingModule // Asegúrate de incluir RouterTestingModule
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            paramMap: of({
              get: (key: string) => '123' // Simulación del parámetro con valor '123'
            })
          }
        }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(DetallesBazarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
