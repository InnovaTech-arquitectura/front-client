import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoServiceComponent } from './info-service.component';
import { HeaderClientComponent } from 'src/app/componentTools/header-client/header-client.component';
import { SidebarClientComponent } from 'src/app/componentTools/sidebar-client/sidebar-client.component';

describe('InfoServiceComponent', () => {
  let component: InfoServiceComponent;
  let fixture: ComponentFixture<InfoServiceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
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
