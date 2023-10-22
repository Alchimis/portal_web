import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoleItemComponent } from './role-item.component';

describe('RoleItemComponent', () => {
  let component: RoleItemComponent;
  let fixture: ComponentFixture<RoleItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RoleItemComponent]
    });
    fixture = TestBed.createComponent(RoleItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
