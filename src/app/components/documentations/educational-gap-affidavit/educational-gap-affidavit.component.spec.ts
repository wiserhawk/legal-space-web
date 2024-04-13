import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EducationalGapAffidavitComponent } from './educational-gap-affidavit.component';

describe('EducationalGapAffidavitComponent', () => {
  let component: EducationalGapAffidavitComponent;
  let fixture: ComponentFixture<EducationalGapAffidavitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EducationalGapAffidavitComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EducationalGapAffidavitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
