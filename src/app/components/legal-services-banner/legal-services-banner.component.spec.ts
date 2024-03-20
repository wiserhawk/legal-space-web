import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LegalServicesBannerComponent } from './legal-services-banner.component';

describe('LegalServicesBannerComponent', () => {
  let component: LegalServicesBannerComponent;
  let fixture: ComponentFixture<LegalServicesBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LegalServicesBannerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LegalServicesBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
