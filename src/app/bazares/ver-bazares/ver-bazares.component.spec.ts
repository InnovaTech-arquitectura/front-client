import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { VerBazaresComponent } from './ver-bazares.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('VerBazaresComponent', () => {
  let component: VerBazaresComponent;
  let fixture: ComponentFixture<VerBazaresComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VerBazaresComponent],
      imports: [RouterTestingModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    });
    fixture = TestBed.createComponent(VerBazaresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
