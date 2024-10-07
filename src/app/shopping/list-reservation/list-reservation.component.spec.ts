import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListReservationComponent } from './list-reservation.component';
import { HeaderClientComponent } from 'src/app/componentTools/header-client/header-client.component';
import { SidebarClientComponent } from 'src/app/componentTools/sidebar-client/sidebar-client.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';

describe('ListReservationComponent', () => {
  let component: ListReservationComponent;
  let fixture: ComponentFixture<ListReservationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      declarations: [
        ListReservationComponent,
        HeaderClientComponent,
        SidebarClientComponent
      ]
    });
    fixture = TestBed.createComponent(ListReservationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
