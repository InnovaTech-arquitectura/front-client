import { TestBed } from '@angular/core/testing';

import { SupplierService } from './supplier.service';
import { HttpClientModule } from '@angular/common/http';

describe('SupplierService', () => {
  let service: SupplierService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule], 
    });
    service = TestBed.inject(SupplierService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
