import {
  ChangeDetectionStrategy,
  Component,
  HostListener,
  inject,
  OnInit,
} from '@angular/core';
import { NgClass } from '@angular/common';
import { DIRECTIONS } from '../../_shared/constants';
import { TabletopComponent } from '../../_shared/components/tabletop/tabletop.component';
import { RobotSimulatorDisabledButtonDirective } from './robot-simulator-disabled-button.directive';
import { RobotSimulatorStore } from '../../_store/robot-simulator/robot-simulator.store';

@Component({
  selector: 'app-robot-simulator',
  standalone: true,
  imports: [NgClass, TabletopComponent, RobotSimulatorDisabledButtonDirective],
  templateUrl: './robot-simulator.component.html',
  styleUrl: './robot-simulator.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [RobotSimulatorStore],
})
export class RobotSimulatorComponent implements OnInit {
  store = inject(RobotSimulatorStore);
  grid = this.store.grid;
  isRobotPlaced = this.store.isPlaced;

  @HostListener('document:keydown', ['$event'])
  onKeydown(event: KeyboardEvent) {
    switch (event.key) {
      case 'ArrowUp':
        this.store.move();
        break;
      case 'ArrowDown':
        this.store.rotateRight();
        this.store.rotateRight();
        break;
      case 'ArrowLeft':
        this.store.rotateLeft();
        break;
      case 'ArrowRight':
        this.store.rotateRight();
        break;
      default:
        break;
    }
  }

  ngOnInit() {
    this.store.setGridSize(5);
  }

  report() {
    alert(this.store.report());
  }

  placeRobot(x: number, y: number) {
    this.store.place({ x, y, direction: DIRECTIONS.NORTH });
  }

  moveRobot() {
    this.store.move();
  }

  rotateRobotLeft() {
    this.store.rotateLeft();
  }

  rotateRobotRight() {
    this.store.rotateRight();
  }
}
