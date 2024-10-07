import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarClientComponent } from './sidebar-client.component';
import { RouterTestingModule } from '@angular/router/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('SidebarClientComponent', () => {
  let component: SidebarClientComponent;
  let fixture: ComponentFixture<SidebarClientComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SidebarClientComponent],
      imports: [RouterTestingModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    });
    fixture = TestBed.createComponent(SidebarClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
