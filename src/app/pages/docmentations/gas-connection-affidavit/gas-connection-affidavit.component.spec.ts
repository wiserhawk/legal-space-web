import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GasConnectionAffidavitComponent } from './gas-connection-affidavit.component';

describe('GasConnectionAffidavitComponent', () => {
  let component: GasConnectionAffidavitComponent;
  let fixture: ComponentFixture<GasConnectionAffidavitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GasConnectionAffidavitComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GasConnectionAffidavitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
