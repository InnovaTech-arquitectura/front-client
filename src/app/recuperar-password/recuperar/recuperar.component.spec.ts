import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms'; // Importa FormsModule
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { RecuperarComponent } from './recuperar.component'; // Asegúrate de que la ruta sea correcta

describe('RecuperarComponent', () => {
  let component: RecuperarComponent;
  let fixture: ComponentFixture<RecuperarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        FormsModule, // Asegúrate de incluir esto
        RouterModule.forRoot([])
      ],
      declarations: [RecuperarComponent],
      providers: [], // Agrega cualquier proveedor si es necesario
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();
  });
 
  beforeEach(() => {
    fixture = TestBed.createComponent(RecuperarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
