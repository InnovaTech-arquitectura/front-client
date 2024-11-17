import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoProductComponent } from './info-product.component';
import { EcommerceService } from 'src/app/service/ecommerce.service';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';
import { SidebarClientComponent } from 'src/app/componentTools/sidebar-client/sidebar-client.component';
import { HeaderClientComponent } from 'src/app/componentTools/header-client/header-client.component';

describe('InfoProductComponent', () => {
  let component: InfoProductComponent;
  let fixture: ComponentFixture<InfoProductComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        InfoProductComponent,
        SidebarClientComponent,
        HeaderClientComponent
      ],
      imports: [RouterTestingModule, HttpClientModule],
      providers: [EcommerceService]
    });
    fixture = TestBed.createComponent(InfoProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
