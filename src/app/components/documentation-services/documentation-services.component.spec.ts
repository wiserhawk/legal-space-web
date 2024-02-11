import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentationServicesComponent } from './documentation-services.component';

describe('DocumentationServicesComponent', () => {
  let component: DocumentationServicesComponent;
  let fixture: ComponentFixture<DocumentationServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DocumentationServicesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DocumentationServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
