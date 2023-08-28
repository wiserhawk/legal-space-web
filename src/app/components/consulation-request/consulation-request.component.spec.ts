import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsulationRequestComponent } from './consulation-request.component';

describe('ConsulationRequestComponent', () => {
  let component: ConsulationRequestComponent;
  let fixture: ComponentFixture<ConsulationRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsulationRequestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsulationRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
