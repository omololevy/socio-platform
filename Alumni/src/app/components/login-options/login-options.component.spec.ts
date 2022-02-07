import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginOptionsComponent } from './login-options.component';

describe('LoginOptionsComponent', () => {
  let component: LoginOptionsComponent;
  let fixture: ComponentFixture<LoginOptionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginOptionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
