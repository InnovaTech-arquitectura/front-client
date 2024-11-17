import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyProductsNaComponent } from './buy-products-na.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';
import { EcommerceService } from 'src/app/service/ecommerce.service';
import { HeaderNaComponent } from 'src/app/componentTools/header-na/header-na.component';


describe('BuyProductsNaComponent', () => {
  let component: BuyProductsNaComponent;
  let fixture: ComponentFixture<BuyProductsNaComponent>;

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        BuyProductsNaComponent,
        HeaderNaComponent
      ],
      imports: [RouterTestingModule, HttpClientModule],
      providers: [EcommerceService]
    });
    fixture = TestBed.createComponent(BuyProductsNaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
