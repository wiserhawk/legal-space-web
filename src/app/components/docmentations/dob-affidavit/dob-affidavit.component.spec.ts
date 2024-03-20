import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DobAffidavitComponent } from './dob-affidavit.component';

describe('DobAffidavitComponent', () => {
  let component: DobAffidavitComponent;
  let fixture: ComponentFixture<DobAffidavitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DobAffidavitComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DobAffidavitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
