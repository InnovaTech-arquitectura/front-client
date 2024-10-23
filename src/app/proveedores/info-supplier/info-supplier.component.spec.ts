import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
import { InfoSupplierComponent } from './info-supplier.component';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from 'src/app/componentTools/header/header.component';
import { SidebarComponent } from 'src/app/componentTools/sidebar/sidebar.component';
import { FormsModule } from '@angular/forms';

describe('InfoSupplierComponent', () => {
  let component: InfoSupplierComponent;
  let fixture: ComponentFixture<InfoSupplierComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        InfoSupplierComponent,
        HeaderComponent,
        SidebarComponent
      ],
      imports: [RouterTestingModule, HttpClientModule, FormsModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    });
    fixture = TestBed.createComponent(InfoSupplierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
