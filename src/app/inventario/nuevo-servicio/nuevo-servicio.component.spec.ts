import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
import { NuevoServicioComponent } from './nuevo-servicio.component';

describe('NuevoServicioComponent', () => {
  let component: NuevoServicioComponent;
  let fixture: ComponentFixture<NuevoServicioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NuevoServicioComponent],
      imports: [RouterTestingModule],
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
