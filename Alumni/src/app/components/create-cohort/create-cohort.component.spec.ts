import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCohortComponent } from './create-cohort.component';

describe('CreateCohortComponent', () => {
  let component: CreateCohortComponent;
  let fixture: ComponentFixture<CreateCohortComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateCohortComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateCohortComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
