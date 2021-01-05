import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TailoredSolutionsComponent } from './tailored-solutions.component';

describe('TailoredSolutionsComponent', () => {
  let component: TailoredSolutionsComponent;
  let fixture: ComponentFixture<TailoredSolutionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TailoredSolutionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TailoredSolutionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
