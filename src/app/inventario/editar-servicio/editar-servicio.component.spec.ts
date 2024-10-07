import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
import { EditarServicioComponent } from './editar-servicio.component';

describe('EditarServicioComponent', () => {
  let component: EditarServicioComponent;
  let fixture: ComponentFixture<EditarServicioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditarServicioComponent],
      imports: [RouterTestingModule],
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
