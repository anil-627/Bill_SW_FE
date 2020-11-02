import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BillwiseDetailsComponent } from './billwise-details.component';

describe('BillwiseDetailsComponent', () => {
  let component: BillwiseDetailsComponent;
  let fixture: ComponentFixture<BillwiseDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BillwiseDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BillwiseDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
