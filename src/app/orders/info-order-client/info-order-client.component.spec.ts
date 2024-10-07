import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InfoOrderClientComponent } from './info-order-client.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('InfoOrderClientComponent', () => {
  let component: InfoOrderClientComponent;
  let fixture: ComponentFixture<InfoOrderClientComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InfoOrderClientComponent],
      imports: [
        RouterModule.forRoot([]), 
        HttpClientModule, 
        FormsModule  
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    });
    fixture = TestBed.createComponent(InfoOrderClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
