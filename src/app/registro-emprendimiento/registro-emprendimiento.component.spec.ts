import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroEmprendimientoComponent } from './registro-emprendimiento.component';

describe('RegistroEmprendimientoComponent', () => {
  let component: RegistroEmprendimientoComponent;
  let fixture: ComponentFixture<RegistroEmprendimientoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegistroEmprendimientoComponent]
    });
    fixture = TestBed.createComponent(RegistroEmprendimientoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
