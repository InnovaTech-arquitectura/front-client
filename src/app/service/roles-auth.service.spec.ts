import { TestBed } from '@angular/core/testing';

import { RolesAuthService } from './roles-auth.service';
import { HttpClientModule } from '@angular/common/http';

describe('RolesAuthService', () => {
  let service: RolesAuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule]
    });
    service = TestBed.inject(RolesAuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
