import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GiftDeedComponent } from './gift-deed.component';

describe('GiftDeedComponent', () => {
  let component: GiftDeedComponent;
  let fixture: ComponentFixture<GiftDeedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GiftDeedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GiftDeedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
