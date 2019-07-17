import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotificationCUComponent } from './notification-cu.component';

describe('NotificationCUComponent', () => {
  let component: NotificationCUComponent;
  let fixture: ComponentFixture<NotificationCUComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotificationCUComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotificationCUComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
