import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms'; // Importa FormsModule si se utiliza ngModel
import { VerificacionComponent } from './verificacion.component';
import { PasswordRecoveryService } from '../../service/PasswordRecoveryService';

describe('VerificacionComponent', () => {
  let component: VerificacionComponent;
  let fixture: ComponentFixture<VerificacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        RouterModule.forRoot([]),
        FormsModule // Asegúrate de incluir esto si se usa ngModel
      ],
      declarations: [VerificacionComponent],
      providers: [PasswordRecoveryService],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();
  });
 
  beforeEach(() => {
    fixture = TestBed.createComponent(VerificacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // Agrega más pruebas según sea necesario
});
