import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { PagosClientComponent } from './pagos-client.component';

describe('PagosClientComponent', () => {
  let component: PagosClientComponent;
  let fixture: ComponentFixture<PagosClientComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PagosClientComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    });
    fixture = TestBed.createComponent(PagosClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
