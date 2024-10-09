import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms'; // Importa FormsModule
import { CrearComponent } from './crear.component'; // Asegúrate de tener la ruta correcta
import { AuthService } from '../../service/auth.service'; // Asegúrate de tener la ruta correcta

describe('CrearComponent', () => {
  let component: CrearComponent;
  let fixture: ComponentFixture<CrearComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        RouterModule.forRoot([]),
        FormsModule // Asegúrate de incluir esto
      ],
      declarations: [CrearComponent],
      providers: [AuthService],
      schemas: [CUSTOM_ELEMENTS_SCHEMA] // Esto ignora elementos personalizados que no están en las pruebas
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // Agrega más pruebas según sea necesario
});
