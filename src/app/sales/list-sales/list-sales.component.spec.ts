import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'; 
import { ListSalesComponent } from './list-sales.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

describe('ListSalesComponent', () => {
  let component: ListSalesComponent;
  let fixture: ComponentFixture<ListSalesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListSalesComponent],
      imports: [
        RouterModule.forRoot([]), 
        HttpClientModule, 
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]

    });
    fixture = TestBed.createComponent(ListSalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
