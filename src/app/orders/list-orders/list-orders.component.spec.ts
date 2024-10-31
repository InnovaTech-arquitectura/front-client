import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ListOrdersComponent } from './list-orders.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { PedidoService } from 'src/app/service/pedido.service';

describe('ListOrdersComponent', () => {
  let component: ListOrdersComponent;
  let fixture: ComponentFixture<ListOrdersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListOrdersComponent],
      imports: [HttpClientTestingModule],
      providers: [PedidoService],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    });
    fixture = TestBed.createComponent(ListOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
