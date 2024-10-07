import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
import { VerProductosServiciosComponent } from './ver-productos-servicios.component';

describe('VerProductosServiciosComponent', () => {
  let component: VerProductosServiciosComponent;
  let fixture: ComponentFixture<VerProductosServiciosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VerProductosServiciosComponent],
      imports: [RouterTestingModule],
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
