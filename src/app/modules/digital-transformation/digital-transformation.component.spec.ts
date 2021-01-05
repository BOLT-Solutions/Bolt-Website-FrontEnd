import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DigitalTransformationComponent } from './digital-transformation.component';

describe('DigitalTransformationComponent', () => {
  let component: DigitalTransformationComponent;
  let fixture: ComponentFixture<DigitalTransformationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DigitalTransformationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DigitalTransformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
