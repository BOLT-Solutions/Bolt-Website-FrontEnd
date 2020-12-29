import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BOLTRESTAURANTComponent } from './boltrestaurant.component';

describe('BOLTRESTAURANTComponent', () => {
  let component: BOLTRESTAURANTComponent;
  let fixture: ComponentFixture<BOLTRESTAURANTComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BOLTRESTAURANTComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BOLTRESTAURANTComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
