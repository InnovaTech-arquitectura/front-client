import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
import { InfoSupplierComponent } from './info-supplier.component';

describe('InfoSupplierComponent', () => {
  let component: InfoSupplierComponent;
  let fixture: ComponentFixture<InfoSupplierComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InfoSupplierComponent],
      imports: [RouterTestingModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    });
    fixture = TestBed.createComponent(InfoSupplierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
