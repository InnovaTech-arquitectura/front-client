import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearPreguntasComponent } from './crear-preguntas.component';
import { RouterTestingModule } from '@angular/router/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormsModule } from '@angular/forms';

describe('CrearPreguntasComponent', () => {
  let component: CrearPreguntasComponent;
  let fixture: ComponentFixture<CrearPreguntasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CrearPreguntasComponent],
      imports: [RouterTestingModule, HttpClientTestingModule, FormsModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    });
    fixture = TestBed.createComponent(CrearPreguntasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
