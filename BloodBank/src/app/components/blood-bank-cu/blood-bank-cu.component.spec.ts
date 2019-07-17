import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BloodBankCUComponent } from './blood-bank-cu.component';

describe('BloodBankCUComponent', () => {
  let component: BloodBankCUComponent;
  let fixture: ComponentFixture<BloodBankCUComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BloodBankCUComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BloodBankCUComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
