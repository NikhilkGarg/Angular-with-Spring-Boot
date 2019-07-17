import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListBloodBankComponent } from './list-blood-bank.component';

describe('ListBloodBankComponent', () => {
  let component: ListBloodBankComponent;
  let fixture: ComponentFixture<ListBloodBankComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListBloodBankComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListBloodBankComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
