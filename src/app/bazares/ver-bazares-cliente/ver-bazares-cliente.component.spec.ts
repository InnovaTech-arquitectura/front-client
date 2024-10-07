import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { VerBazaresClienteComponent } from './ver-bazares-cliente.component';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

describe('VerBazaresClienteComponent', () => {
  let component: VerBazaresClienteComponent;
  let fixture: ComponentFixture<VerBazaresClienteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterModule],
      declarations: [VerBazaresClienteComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            params: of({ id: '123' }),
          },
        },
      ],
    });
    fixture = TestBed.createComponent(VerBazaresClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
