import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { DetallesBazarClienteComponent } from './detalles-bazar-cliente.component';

describe('DetallesBazarClienteComponent', () => {
  let component: DetallesBazarClienteComponent;
  let fixture: ComponentFixture<DetallesBazarClienteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetallesBazarClienteComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    });
    fixture = TestBed.createComponent(DetallesBazarClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
