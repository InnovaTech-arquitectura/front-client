import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { PedidoService } from './pedido.service';
import { environment } from '../../environments/environment';
import { Order } from '../model/order';

describe('PedidoService', () => {
  let service: PedidoService;
  let httpMock: HttpTestingController;
  const apiUrl = `${environment.baseApiUrl}/order`;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [PedidoService],
    });
    service = TestBed.inject(PedidoService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should retrieve all orders from the API via GET', () => {
    const dummyOrders: Order[] = [
      {
        id: 1,
        sale_number: 'SN1',
        address: '123 Calle Principal',
        additional_info: 'Info adicional 1',
        city: { id: 1, name: 'Ciudad 1', state: { id: 1, name: 'Estado 1' } },
        orderState: { id: 1, state: 'Pendiente' },
      },
    ];

    service.getAllPedidos(0, 10).subscribe((orders) => {
      expect(orders.length).toBe(1);
      expect(orders).toEqual(dummyOrders);
    });

    const req = httpMock.expectOne(`${apiUrl}/all?page=0&limit=10`);
    expect(req.request.method).toBe('GET');
    req.flush(dummyOrders);
  });
});
