import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';  // Importar CUSTOM_ELEMENTS_SCHEMA
import { ListOrdersComponent } from './list-orders.component';

describe('ListOrdersComponent', () => {
  let component: ListOrdersComponent;
  let fixture: ComponentFixture<ListOrdersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListOrdersComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]  // Añadir CUSTOM_ELEMENTS_SCHEMA
    });
    fixture = TestBed.createComponent(ListOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
