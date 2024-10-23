import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { PedidoService } from './pedido.service';
import { Pedido } from '../pedido.model';
import { environment } from '../../environments/environment';

describe('PedidoService', () => {
  let service: PedidoService;
  let httpMock: HttpTestingController;

  const apiUrl = environment.funcionalidadesUrl + ':8090/order';

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [PedidoService]
    });
    service = TestBed.inject(PedidoService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should retrieve all pedidos from the API via GET', () => {
    const dummyPedidos: Pedido[] = [
      {
        id: 1, precio: 100, emprendimiento: 'Emp1', estado: 'pendiente', direccion: '', departamento: '', ciudad: '',
        cliente: '',
        fecha: ''
      },
      {
        id: 2, precio: 200, emprendimiento: 'Emp2', estado: 'entregado', direccion: '', departamento: '', ciudad: '',
        cliente: '',
        fecha: ''
      }
    ];

    service.getAllPedidos(0, 10).subscribe(pedidos => {
      expect(pedidos.length).toBe(2);
      expect(pedidos).toEqual(dummyPedidos);
    });

    const req = httpMock.expectOne(`${apiUrl}/all?page=0&limit=10`);
    expect(req.request.method).toBe('GET');
    req.flush(dummyPedidos);
  });

  it('should retrieve a single pedido by ID from the API via GET', () => {
    const dummyPedido: Pedido = {
      id: 1, precio: 100, emprendimiento: 'Emp1', estado: 'pendiente', direccion: '', departamento: '', ciudad: '',
      cliente: '',
      fecha: ''
    };

    service.getPedidoById(1).subscribe(pedido => {
      expect(pedido).toEqual(dummyPedido);
    });

    const req = httpMock.expectOne(`${apiUrl}/1`);
    expect(req.request.method).toBe('GET');
    req.flush(dummyPedido);
  });
});
