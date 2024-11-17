import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { EntrepreneurshipStatsComponent } from './entrepreneurship-stats.component';
import { DashboardService } from '../../service/dashboard.service';

describe('EntrepreneurshipStatsComponent', () => {
  let component: EntrepreneurshipStatsComponent;
  let fixture: ComponentFixture<EntrepreneurshipStatsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EntrepreneurshipStatsComponent],
      imports: [RouterTestingModule, HttpClientTestingModule], // Agrega HttpClientTestingModule aquí
      providers: [DashboardService], // Asegúrate de proporcionar DashboardService si es necesario
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    });
    fixture = TestBed.createComponent(EntrepreneurshipStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
