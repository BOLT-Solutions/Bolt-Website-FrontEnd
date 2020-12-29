import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BOLTDOCTORComponent } from './boltdoctor.component';

describe('BOLTDOCTORComponent', () => {
  let component: BOLTDOCTORComponent;
  let fixture: ComponentFixture<BOLTDOCTORComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BOLTDOCTORComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BOLTDOCTORComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
