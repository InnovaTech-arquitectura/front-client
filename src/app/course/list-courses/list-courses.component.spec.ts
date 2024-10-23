import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'; 
import { ListCoursesComponent } from './list-courses.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

describe('ListCoursesComponent', () => {
  let component: ListCoursesComponent;
  let fixture: ComponentFixture<ListCoursesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListCoursesComponent],
      imports: [
        RouterModule.forRoot([]), // Agregado para manejar rutas
        HttpClientModule, // Añadido si usas HttpClientS // Añadido si usas formularios o ngModel
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    });
    fixture = TestBed.createComponent(ListCoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
