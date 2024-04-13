import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AfterMarriageNameChangeAffidavitComponent } from './after-marriage-name-change-affidavit.component';

describe('AfterMarriageNameChangeAffidavitComponent', () => {
  let component: AfterMarriageNameChangeAffidavitComponent;
  let fixture: ComponentFixture<AfterMarriageNameChangeAffidavitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AfterMarriageNameChangeAffidavitComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AfterMarriageNameChangeAffidavitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
