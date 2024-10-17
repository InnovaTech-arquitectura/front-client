import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerPreguntaComponent } from './ver-pregunta.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormsModule } from '@angular/forms';

describe('VerPreguntaComponent', () => {
  let component: VerPreguntaComponent;
  let fixture: ComponentFixture<VerPreguntaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VerPreguntaComponent],
      imports: [RouterTestingModule, HttpClientTestingModule, FormsModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    });
    fixture = TestBed.createComponent(VerPreguntaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
