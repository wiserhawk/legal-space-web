import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherAffidavitComponent } from './other-affidavit.component';

describe('OtherAffidavitComponent', () => {
  let component: OtherAffidavitComponent;
  let fixture: ComponentFixture<OtherAffidavitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OtherAffidavitComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OtherAffidavitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
