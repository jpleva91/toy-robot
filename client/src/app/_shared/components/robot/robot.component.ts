import {
  ChangeDetectionStrategy,
  Component,
  input,
  output,
} from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-robot',
  standalone: true,
  imports: [NgClass],
  templateUrl: './robot.component.html',
  styleUrl: './robot.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RobotComponent {
  /**
   * The robot's position on the grid.
   * The cell is an object with x, y, and direction properties.
   * The direction property is optional and determines if the robot is in the cell and facing a specific direction.
   */
  cell = input.required<{
    x: number;
    y: number;
    direction?: string;
  }>();

  /**
   * Emits the position of the robot when it is placed on the grid.
   */
  placeRobot = output<{ x: number; y: number }>();
}
