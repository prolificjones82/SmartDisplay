import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RainTempGraphComponent } from './rain-temp-graph.component';

describe('RainTempGraphComponent', () => {
  let component: RainTempGraphComponent;
  let fixture: ComponentFixture<RainTempGraphComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RainTempGraphComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RainTempGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
