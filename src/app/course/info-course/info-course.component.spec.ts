import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';  // Importar CUSTOM_ELEMENTS_SCHEMA
import { InfoCourseComponent } from './info-course.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

describe('InfoCourseComponent', () => {
  let component: InfoCourseComponent;
  let fixture: ComponentFixture<InfoCourseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InfoCourseComponent],
      imports: [
        RouterModule.forRoot([]), // Agregado para manejar rutas
        HttpClientModule, // Añadido si usas HttpClientS // Añadido si usas formularios o ngModel
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    });
    fixture = TestBed.createComponent(InfoCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});