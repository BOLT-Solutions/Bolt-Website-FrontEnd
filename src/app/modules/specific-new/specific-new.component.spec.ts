import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecificNewComponent } from './specific-new.component';

describe('SpecificNewComponent', () => {
  let component: SpecificNewComponent;
  let fixture: ComponentFixture<SpecificNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpecificNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpecificNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
