import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstChildAffidavitComponent } from './first-child-affidavit.component';

describe('FirstChildAffidavitComponent', () => {
  let component: FirstChildAffidavitComponent;
  let fixture: ComponentFixture<FirstChildAffidavitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FirstChildAffidavitComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FirstChildAffidavitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
