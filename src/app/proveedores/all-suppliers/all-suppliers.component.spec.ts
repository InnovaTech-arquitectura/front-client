import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllSuppliersComponent } from './all-suppliers.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from 'src/app/componentTools/header/header.component';
import { SidebarComponent } from 'src/app/componentTools/sidebar/sidebar.component';

describe('AllSuppliersComponent', () => {
  let component: AllSuppliersComponent;
  let fixture: ComponentFixture<AllSuppliersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        AllSuppliersComponent,
        HeaderComponent,
        SidebarComponent
      ],
      imports: [RouterTestingModule, HttpClientModule],
    });
    fixture = TestBed.createComponent(AllSuppliersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
