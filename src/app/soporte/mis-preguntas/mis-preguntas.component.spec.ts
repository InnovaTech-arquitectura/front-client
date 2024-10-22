import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MisPreguntasComponent } from './mis-preguntas.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http'; // Importa HttpClientModule
import { SupportService } from 'src/app/service/support.service'; // Importa tu servicio

describe('MisPreguntasComponent', () => {
  let component: MisPreguntasComponent;
  let fixture: ComponentFixture<MisPreguntasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MisPreguntasComponent],
      imports: [RouterTestingModule, HttpClientModule], // Asegúrate de incluir HttpClientModule
      providers: [SupportService], // Asegúrate de incluir tu servicio
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    });
    fixture = TestBed.createComponent(MisPreguntasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
