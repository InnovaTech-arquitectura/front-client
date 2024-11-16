import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListOrdersComponent } from './list-orders.component';
import { PedidoService } from '../../service/pedido.service';
import { of } from 'rxjs';
import { Order } from '../../model/order';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('ListOrdersComponent', () => {
  let component: ListOrdersComponent;
  let fixture: ComponentFixture<ListOrdersComponent>;
  let mockPedidoService: jasmine.SpyObj<PedidoService>;

  beforeEach(() => {
    mockPedidoService = jasmine.createSpyObj('PedidoService', [
      'getAllPedidos',
      'deletePedido',
    ]);

    TestBed.configureTestingModule({
      declarations: [ListOrdersComponent],
      providers: [{ provide: PedidoService, useValue: mockPedidoService }],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    });

    fixture = TestBed.createComponent(ListOrdersComponent);
    component = fixture.componentInstance;
  });

  it('should load orders on init', () => {
    const mockOrders: Order[] = [
      {
        id: 1,
        sale_number: 'SN1',
        address: '123 Calle Principal',
        additional_info: 'Info adicional 1',
        city: { id: 1, name: 'Ciudad 1', state: { id: 1, name: 'Estado 1' } },
        orderState: { id: 1, state: 'Pendiente' },
      },
    ];
  
    mockPedidoService.getAllPedidos.and.returnValue(of(mockOrders));
  
    component.ngOnInit();
  
    expect(mockPedidoService.getAllPedidos).toHaveBeenCalled();
    expect(component.orders).toEqual(mockOrders);
  });
  
});
