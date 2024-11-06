import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RegistroEmprendimientoComponent } from './registro-emprendimiento.component';

import { HttpClientTestingModule } from '@angular/common/http/testing'; // For HTTP requests in tests
import { AuthService } from '../service/auth.service';
import { FormsModule } from '@angular/forms';  // Import FormsModule to use ngModel
import { RouterTestingModule } from '@angular/router/testing'; // Import RouterTestingModule to handle routerLink

describe('RegistroEmprendimientoComponent', () => {
  let component: RegistroEmprendimientoComponent;
  let fixture: ComponentFixture<RegistroEmprendimientoComponent>;
  let authService: AuthService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RegistroEmprendimientoComponent],
      imports: [
        HttpClientTestingModule, 
        FormsModule, 
        RouterTestingModule // Add RouterTestingModule here
      ],
      providers: [AuthService], // Ensure AuthService is provided
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistroEmprendimientoComponent);
    component = fixture.componentInstance;
    authService = TestBed.inject(AuthService); // Inject AuthService
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
