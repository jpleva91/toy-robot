import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RobotSimulatorComponent } from './robot-simulator.component';

describe('RobotSimulatorComponent', () => {
  let component: RobotSimulatorComponent;
  let fixture: ComponentFixture<RobotSimulatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RobotSimulatorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RobotSimulatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
