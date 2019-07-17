import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserCreateUpdateByStaffComponent } from './user-create-update-by-staff.component';

describe('UserCreateUpdateByStaffComponent', () => {
  let component: UserCreateUpdateByStaffComponent;
  let fixture: ComponentFixture<UserCreateUpdateByStaffComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserCreateUpdateByStaffComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserCreateUpdateByStaffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
