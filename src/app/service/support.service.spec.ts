import { TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http'; // Asegúrate de importar HttpClientModule
import { SupportService } from './support.service'; // Cambia la ruta según tu estructura

describe('SupportService', () => {
  let service: SupportService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule], // Importa el módulo aquí
      providers: [SupportService],
    });
    service = TestBed.inject(SupportService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
