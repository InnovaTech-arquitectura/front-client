import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
import { InfoProductoComponent } from './info-producto.component';

describe('InfoProductoComponent', () => {
  let component: InfoProductoComponent;
  let fixture: ComponentFixture<InfoProductoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InfoProductoComponent],
      imports: [RouterTestingModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    });
    fixture = TestBed.createComponent(InfoProductoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
