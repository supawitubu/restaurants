import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExportProductComponent } from './export-product.component';

describe('ExportProductComponent', () => {
  let component: ExportProductComponent;
  let fixture: ComponentFixture<ExportProductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExportProductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExportProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
