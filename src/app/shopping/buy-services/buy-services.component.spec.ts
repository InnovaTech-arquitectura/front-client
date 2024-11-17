import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyServicesComponent } from './buy-services.component';
import { HeaderClientComponent } from 'src/app/componentTools/header-client/header-client.component';
import { SidebarClientComponent } from 'src/app/componentTools/sidebar-client/sidebar-client.component';
import { RouterTestingModule } from '@angular/router/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { EcommerceService } from 'src/app/service/ecommerce.service';
import { HttpClientModule } from '@angular/common/http';

describe('BuyServicesComponent', () => {
  let component: BuyServicesComponent;
  let fixture: ComponentFixture<BuyServicesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      declarations: [
        BuyServicesComponent,
        HeaderClientComponent,
        SidebarClientComponent
      ],
      providers: [EcommerceService]
    });
    fixture = TestBed.createComponent(BuyServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
