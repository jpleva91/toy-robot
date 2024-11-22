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
  grid =
    input.required<
      { x: number; y: number; direction: string | undefined }[][]
    >();
  placeRobot = output<{ x: number; y: number }>();
}
