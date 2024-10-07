import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
import { InfoServicioComponent } from './info-servicio.component';

describe('InfoServicioComponent', () => {
  let component: InfoServicioComponent;
  let fixture: ComponentFixture<InfoServicioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InfoServicioComponent],
      imports: [RouterTestingModule],
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
