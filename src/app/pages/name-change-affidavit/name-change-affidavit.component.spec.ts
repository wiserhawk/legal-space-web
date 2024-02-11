import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NameChangeAffidavitComponent } from './name-change-affidavit.component';

describe('NameChangeAffidavitComponent', () => {
  let component: NameChangeAffidavitComponent;
  let fixture: ComponentFixture<NameChangeAffidavitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NameChangeAffidavitComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NameChangeAffidavitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
