import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LegalServicesPageComponent } from './legal-services-page.component';

describe('LegalServicesPageComponent', () => {
  let component: LegalServicesPageComponent;
  let fixture: ComponentFixture<LegalServicesPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LegalServicesPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LegalServicesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
