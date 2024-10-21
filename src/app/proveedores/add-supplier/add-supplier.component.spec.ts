import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSupplierComponent } from './add-supplier.component';
import { HeaderComponent } from 'src/app/componentTools/header/header.component';
import { SidebarComponent } from 'src/app/componentTools/sidebar/sidebar.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('AddSupplierComponent', () => {
  let component: AddSupplierComponent;
  let fixture: ComponentFixture<AddSupplierComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        AddSupplierComponent,
        HeaderComponent,
        SidebarComponent
      ],
      imports: [RouterTestingModule, HttpClientModule, FormsModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    });
    fixture = TestBed.createComponent(AddSupplierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
