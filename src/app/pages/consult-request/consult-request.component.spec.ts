import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultRequestComponent } from './consult-request.component';

describe('ConsultRequestComponent', () => {
  let component: ConsultRequestComponent;
  let fixture: ComponentFixture<ConsultRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultRequestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsultRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
