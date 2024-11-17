import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyProductsComponent } from './buy-products.component';
import { SidebarClientComponent } from 'src/app/componentTools/sidebar-client/sidebar-client.component';
import { HeaderClientComponent } from 'src/app/componentTools/header-client/header-client.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';
import { EcommerceService } from 'src/app/service/ecommerce.service';

describe('BuyProductsComponent', () => {
  let component: BuyProductsComponent;
  let fixture: ComponentFixture<BuyProductsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        BuyProductsComponent,
        SidebarClientComponent,
        HeaderClientComponent
      ],
      imports: [RouterTestingModule, HttpClientModule],
      providers: [EcommerceService]
    });
    fixture = TestBed.createComponent(BuyProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
