import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GasPipelineConnectionAffidavitComponent } from './gas-pipeline-connection-affidavit.component';

describe('GasPipelineConnectionAffidavitComponent', () => {
  let component: GasPipelineConnectionAffidavitComponent;
  let fixture: ComponentFixture<GasPipelineConnectionAffidavitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GasPipelineConnectionAffidavitComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GasPipelineConnectionAffidavitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
