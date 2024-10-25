import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ReservaService } from './reserva.service';
import { Reserva } from '../reserva.model';
import { environment } from '../../environments/environment';

describe('ReservaService', () => {
  let service: ReservaService;
  let httpMock: HttpTestingController;
  const apiUrl = environment.baseApiUrl + '/api/reservas';

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ReservaService]
    });
    service = TestBed.inject(ReservaService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should fetch all reservas', () => {
    const dummyReservas: Reserva[] = [
      { id: 1, servicio: 'Servicio 1', fechaInicio: '2023-01-01', fechaFinal: '2023-01-02', emprendimiento: 'Emp 1', precio: 100 },
      { id: 2, servicio: 'Servicio 2', fechaInicio: '2023-02-01', fechaFinal: '2023-02-02', emprendimiento: 'Emp 2', precio: 200 }
    ];

    service.getAllReservas().subscribe(reservas => {
      expect(reservas.length).toBe(2);
      expect(reservas).toEqual(dummyReservas);
    });

    const req = httpMock.expectOne(apiUrl);
    expect(req.request.method).toBe('GET');
    req.flush(dummyReservas);
  });

  it('should fetch a reserva by ID', () => {
    const dummyReserva: Reserva = {
      id: 1,
      servicio: 'Servicio 1',
      fechaInicio: '2023-01-01',
      fechaFinal: '2023-01-02',
      emprendimiento: 'Emp 1',
      precio: 100
    };

    service.getReservaById(1).subscribe(reserva => {
      expect(reserva).toEqual(dummyReserva);
    });

    const req = httpMock.expectOne(`${apiUrl}/1`);
    expect(req.request.method).toBe('GET');
    req.flush(dummyReserva);
  });
});
