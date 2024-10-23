import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CreateSaleComponent } from './create-sale.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';  

describe('CreateSaleComponent', () => {
  let component: CreateSaleComponent;
  let fixture: ComponentFixture<CreateSaleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateSaleComponent],
      imports: [
        RouterModule.forRoot([]), 
        HttpClientModule, 
        FormsModule  
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    });
    fixture = TestBed.createComponent(CreateSaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
