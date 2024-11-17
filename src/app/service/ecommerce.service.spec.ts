import { TestBed } from '@angular/core/testing';

import { EcommerceService } from './ecommerce.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('EcommerceService', () => {
  let service: EcommerceService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule] 
    });
    service = TestBed.inject(EcommerceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
