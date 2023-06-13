import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HolidayPakageComponent } from './holiday-pakage.component';

describe('HolidayPakageComponent', () => {
  let component: HolidayPakageComponent;
  let fixture: ComponentFixture<HolidayPakageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HolidayPakageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HolidayPakageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
