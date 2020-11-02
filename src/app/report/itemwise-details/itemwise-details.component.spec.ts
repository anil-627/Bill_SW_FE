import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemwiseDetailsComponent } from './itemwise-details.component';

describe('ItemwiseDetailsComponent', () => {
  let component: ItemwiseDetailsComponent;
  let fixture: ComponentFixture<ItemwiseDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemwiseDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemwiseDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
