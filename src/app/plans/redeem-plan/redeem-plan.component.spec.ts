import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RedeemPlanComponent } from './redeem-plan.component';
import { RouterTestingModule } from '@angular/router/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('RedeemPlanComponent', () => {
  let component: RedeemPlanComponent;
  let fixture: ComponentFixture<RedeemPlanComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RedeemPlanComponent],
      imports: [RouterTestingModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    });
    fixture = TestBed.createComponent(RedeemPlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
