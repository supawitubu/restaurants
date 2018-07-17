import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DelAddMoneyComponent } from './del-add-money.component';

describe('DelAddMoneyComponent', () => {
  let component: DelAddMoneyComponent;
  let fixture: ComponentFixture<DelAddMoneyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DelAddMoneyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DelAddMoneyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
