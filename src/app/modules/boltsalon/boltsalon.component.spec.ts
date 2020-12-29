import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BOLTSALONComponent } from './boltsalon.component';

describe('BOLTSALONComponent', () => {
  let component: BOLTSALONComponent;
  let fixture: ComponentFixture<BOLTSALONComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BOLTSALONComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BOLTSALONComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
