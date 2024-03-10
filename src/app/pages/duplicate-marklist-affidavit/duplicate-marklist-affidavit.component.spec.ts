import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DuplicateMarklistAffidavitComponent } from './duplicate-marklist-affidavit.component';

describe('DuplicateMarklistAffidavitComponent', () => {
  let component: DuplicateMarklistAffidavitComponent;
  let fixture: ComponentFixture<DuplicateMarklistAffidavitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DuplicateMarklistAffidavitComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DuplicateMarklistAffidavitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
