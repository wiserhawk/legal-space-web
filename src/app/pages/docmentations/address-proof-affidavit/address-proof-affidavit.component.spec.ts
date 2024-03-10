import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddressProofAffidavitComponent } from './address-proof-affidavit.component';

describe('AddressProofAffidavitComponent', () => {
  let component: AddressProofAffidavitComponent;
  let fixture: ComponentFixture<AddressProofAffidavitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddressProofAffidavitComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddressProofAffidavitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
