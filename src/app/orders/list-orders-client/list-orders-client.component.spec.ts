import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListOrdersClientComponent } from './list-orders-client.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';  

describe('ListOrdersClientComponent', () => {
  let component: ListOrdersClientComponent;
  let fixture: ComponentFixture<ListOrdersClientComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListOrdersClientComponent],
      imports: [
        RouterModule.forRoot([]), 
        HttpClientModule, 
        FormsModule  
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    });
    fixture = TestBed.createComponent(ListOrdersClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
}); 
