import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Sec1Ass3Component } from './sec1-ass3.component';

describe('Sec1Ass3Component', () => {
  let component: Sec1Ass3Component;
  let fixture: ComponentFixture<Sec1Ass3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Sec1Ass3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Sec1Ass3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
