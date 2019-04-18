import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EqSolverComponent } from './eq-solver.component';

describe('EqSolverComponent', () => {
  let component: EqSolverComponent;
  let fixture: ComponentFixture<EqSolverComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EqSolverComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EqSolverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
