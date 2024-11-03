import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoServiceNaComponent } from './info-service-na.component';
import { HeaderClientComponent } from 'src/app/componentTools/header-client/header-client.component';
import { SidebarClientComponent } from 'src/app/componentTools/sidebar-client/sidebar-client.component';
import { RouterTestingModule } from '@angular/router/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { EcommerceService } from 'src/app/service/ecommerce.service';
import { HttpClientModule } from '@angular/common/http';

describe('InfoServiceNaComponent', () => {
  let component: InfoServiceNaComponent;
  let fixture: ComponentFixture<InfoServiceNaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      declarations: [
        InfoServiceNaComponent,
        HeaderClientComponent, // Añadido aquí
        SidebarClientComponent
      ],
      providers: [EcommerceService]
    });
    fixture = TestBed.createComponent(InfoServiceNaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
