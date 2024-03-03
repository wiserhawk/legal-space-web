import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EducationLoanAffidavitComponent } from './education-loan-affidavit.component';

describe('EducationLoanAffidavitComponent', () => {
  let component: EducationLoanAffidavitComponent;
  let fixture: ComponentFixture<EducationLoanAffidavitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EducationLoanAffidavitComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EducationLoanAffidavitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
