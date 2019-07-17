import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DonorConsentComponent } from './donor-consent.component';

describe('DonorConsentComponent', () => {
  let component: DonorConsentComponent;
  let fixture: ComponentFixture<DonorConsentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DonorConsentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DonorConsentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
