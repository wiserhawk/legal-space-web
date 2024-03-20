import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentationsBannerComponent } from './documentations-banner.component';

describe('DocumentationsBannerComponent', () => {
  let component: DocumentationsBannerComponent;
  let fixture: ComponentFixture<DocumentationsBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DocumentationsBannerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DocumentationsBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
