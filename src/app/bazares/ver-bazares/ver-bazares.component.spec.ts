import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { VerBazaresComponent } from './ver-bazares.component';
import { HttpClientTestingModule } from '@angular/common/http/testing'; 


describe('VerBazaresComponent', () => {
  let component: VerBazaresComponent;
  let fixture: ComponentFixture<VerBazaresComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VerBazaresComponent],
      imports: [HttpClientTestingModule],
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
