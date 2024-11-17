import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyServicesNaComponent } from './buy-services-na.component';
import { HeaderNaComponent } from 'src/app/componentTools/header-na/header-na.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';
import { EcommerceService } from 'src/app/service/ecommerce.service';

describe('BuyServicesNaComponent', () => {
  let component: BuyServicesNaComponent;
  let fixture: ComponentFixture<BuyServicesNaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        BuyServicesNaComponent,
        HeaderNaComponent
      ],
      imports: [RouterTestingModule, HttpClientModule],
      providers: [EcommerceService]
    });
    fixture = TestBed.createComponent(BuyServicesNaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
