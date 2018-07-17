import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmproyeeComponent } from './emproyee.component';

describe('EmproyeeComponent', () => {
  let component: EmproyeeComponent;
  let fixture: ComponentFixture<EmproyeeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmproyeeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmproyeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
