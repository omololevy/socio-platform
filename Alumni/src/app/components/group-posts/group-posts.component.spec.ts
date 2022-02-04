import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupPostsComponent } from './group-posts.component';

describe('GroupPostsComponent', () => {
  let component: GroupPostsComponent;
  let fixture: ComponentFixture<GroupPostsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GroupPostsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupPostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
