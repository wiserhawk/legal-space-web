import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RevocationPowerOfAttorneyComponent } from './revocation-power-of-attorney.component';

describe('RevocationPowerOfAttorneyComponent', () => {
  let component: RevocationPowerOfAttorneyComponent;
  let fixture: ComponentFixture<RevocationPowerOfAttorneyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RevocationPowerOfAttorneyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RevocationPowerOfAttorneyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
