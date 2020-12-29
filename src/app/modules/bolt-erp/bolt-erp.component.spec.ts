import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoltErpComponent } from './bolt-erp.component';

describe('BoltErpComponent', () => {
  let component: BoltErpComponent;
  let fixture: ComponentFixture<BoltErpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoltErpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoltErpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
