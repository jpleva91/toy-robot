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
  cell = input.required<{
    x: number;
    y: number;
    direction?: string;
  }>();
  placeRobot = output<{ x: number; y: number }>();
}
