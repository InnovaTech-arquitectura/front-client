import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms'; // Importar FormsModule si usas ngModel
import { InicioSesionComponent } from './inicio-sesion.component'; // Asegúrate de tener la ruta correcta
import { AuthService } from '../service/auth.service'; // Asegúrate de tener la ruta correcta
 
describe('InicioSesionComponent', () => {
  let component: InicioSesionComponent;
  let fixture: ComponentFixture<InicioSesionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        RouterModule.forRoot([]),
        FormsModule // Asegúrate de incluir esto si usas ngModel
      ],
      declarations: [InicioSesionComponent],
      providers: [AuthService], // Asegúrate de incluir el servicio aquí
      schemas: [CUSTOM_ELEMENTS_SCHEMA] // Ignora elementos personalizados que no están en las pruebas
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InicioSesionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // Agrega más pruebas según sea necesario
});
