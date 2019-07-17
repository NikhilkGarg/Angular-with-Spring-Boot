import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StaffCreateUpdateFormByAdminComponent } from './staff-create-update-form-by-admin.component';

describe('StaffCreateUpdateFormByAdminComponent', () => {
  let component: StaffCreateUpdateFormByAdminComponent;
  let fixture: ComponentFixture<StaffCreateUpdateFormByAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StaffCreateUpdateFormByAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StaffCreateUpdateFormByAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
