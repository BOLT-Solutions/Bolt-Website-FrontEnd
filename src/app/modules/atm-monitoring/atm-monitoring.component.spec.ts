import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AtmMonitoringComponent } from './atm-monitoring.component';

describe('AtmMonitoringComponent', () => {
  let component: AtmMonitoringComponent;
  let fixture: ComponentFixture<AtmMonitoringComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AtmMonitoringComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AtmMonitoringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
