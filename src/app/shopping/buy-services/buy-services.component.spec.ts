import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyServicesComponent } from './buy-services.component';

describe('BuyServicesComponent', () => {
  let component: BuyServicesComponent;
  let fixture: ComponentFixture<BuyServicesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BuyServicesComponent]
    });
    fixture = TestBed.createComponent(BuyServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
