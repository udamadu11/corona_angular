import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CasesStartComponent } from './cases-start.component';

describe('CasesStartComponent', () => {
  let component: CasesStartComponent;
  let fixture: ComponentFixture<CasesStartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CasesStartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CasesStartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
