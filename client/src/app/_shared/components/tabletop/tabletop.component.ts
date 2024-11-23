import {
  ChangeDetectionStrategy,
  Component,
  input,
  output,
} from '@angular/core';
import { NgClass } from '@angular/common';
import { RobotComponent } from '../robot/robot.component';

@Component({
  selector: 'app-tabletop',
  standalone: true,
  imports: [NgClass, RobotComponent],
  templateUrl: './tabletop.component.html',
  styleUrl: './tabletop.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TabletopComponent {
  /**
   * The grid for the tabletop.
   * The grid is a two-dimensional array of cells. Each cell is an object with x, y, and direction properties.
   * The direction property is optional and determines if the robot is in the cell and facing a specific direction.
   */
  grid =
    input.required<
      { x: number; y: number; direction: string | undefined }[][]
    >();

  /**
   * Emits the position of the robot when it is placed on the grid.
   */
  placeRobot = output<{ x: number; y: number }>();
}
