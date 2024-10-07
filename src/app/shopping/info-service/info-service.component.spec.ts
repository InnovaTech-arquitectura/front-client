import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoServiceComponent } from './info-service.component';
import { HeaderClientComponent } from 'src/app/componentTools/header-client/header-client.component';
import { SidebarClientComponent } from 'src/app/componentTools/sidebar-client/sidebar-client.component';
import { RouterTestingModule } from '@angular/router/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('InfoServiceComponent', () => {
  let component: InfoServiceComponent;
  let fixture: ComponentFixture<InfoServiceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      declarations: [
        InfoServiceComponent,
        HeaderClientComponent, // Añadido aquí
        SidebarClientComponent
      ]
    });
    fixture = TestBed.createComponent(InfoServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
