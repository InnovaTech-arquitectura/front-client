import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyServicesComponent } from './buy-services.component';
import { HeaderClientComponent } from 'src/app/componentTools/header-client/header-client.component';
import { SidebarClientComponent } from 'src/app/componentTools/sidebar-client/sidebar-client.component';

describe('BuyServicesComponent', () => {
  let component: BuyServicesComponent;
  let fixture: ComponentFixture<BuyServicesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        BuyServicesComponent,
        HeaderClientComponent, // Añadido aquí
        SidebarClientComponent
      ]
    });
    fixture = TestBed.createComponent(BuyServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
