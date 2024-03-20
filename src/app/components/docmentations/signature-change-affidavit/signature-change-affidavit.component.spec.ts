import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignatureChangeAffidavitComponent } from './signature-change-affidavit.component';

describe('SignatureChangeAffidavitComponent', () => {
  let component: SignatureChangeAffidavitComponent;
  let fixture: ComponentFixture<SignatureChangeAffidavitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignatureChangeAffidavitComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignatureChangeAffidavitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
