import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncomeProofAffidavitComponent } from './income-proof-affidavit.component';

describe('IncomeProofAffidavitComponent', () => {
  let component: IncomeProofAffidavitComponent;
  let fixture: ComponentFixture<IncomeProofAffidavitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IncomeProofAffidavitComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IncomeProofAffidavitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
