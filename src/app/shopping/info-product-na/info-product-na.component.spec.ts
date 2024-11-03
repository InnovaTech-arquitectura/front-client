import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoProductNaComponent } from './info-product-na.component';
import { HeaderNaComponent } from 'src/app/componentTools/header-na/header-na.component';
import { EcommerceService } from 'src/app/service/ecommerce.service';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';

describe('InfoProductNaComponent', () => {
  let component: InfoProductNaComponent;
  let fixture: ComponentFixture<InfoProductNaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        InfoProductNaComponent,
        HeaderNaComponent
      ],
      imports: [RouterTestingModule, HttpClientModule],
      providers: [EcommerceService]
    });
    fixture = TestBed.createComponent(InfoProductNaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
