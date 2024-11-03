import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderNaComponent } from './header-na.component';

describe('HeaderNaComponent', () => {
  let component: HeaderNaComponent;
  let fixture: ComponentFixture<HeaderNaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderNaComponent]
    });
    fixture = TestBed.createComponent(HeaderNaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
