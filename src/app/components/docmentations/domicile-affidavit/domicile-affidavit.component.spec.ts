import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DomicileAffidavitComponent } from './domicile-affidavit.component';

describe('DomicileAffidavitComponent', () => {
  let component: DomicileAffidavitComponent;
  let fixture: ComponentFixture<DomicileAffidavitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DomicileAffidavitComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DomicileAffidavitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
