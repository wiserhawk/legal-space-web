import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarriageRegistrationAffidavitComponent } from './marriage-registration-affidavit.component';

describe('MarriageRegistrationAffidavitComponent', () => {
  let component: MarriageRegistrationAffidavitComponent;
  let fixture: ComponentFixture<MarriageRegistrationAffidavitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MarriageRegistrationAffidavitComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MarriageRegistrationAffidavitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
