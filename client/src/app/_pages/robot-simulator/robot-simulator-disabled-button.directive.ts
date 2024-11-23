import {
  Directive,
  ElementRef,
  inject,
  input,
  OnChanges,
  Renderer2,
  SimpleChanges,
} from '@angular/core';

/**
 * Directive to disable a button when the robot is not placed on the grid.
 * It also sets the title attribute to show a tooltip when the button is disabled.
 */
@Directive({
  selector: '[appRobotSimulatorDisabledButton]',
  standalone: true,
})
export class RobotSimulatorDisabledButtonDirective implements OnChanges {
  appRobotSimulatorDisabledButton = input<boolean>();
  title = input<string>('Please place the robot first');

  #renderer = inject(Renderer2);
  #el = inject(ElementRef);

  ngOnChanges(changes: SimpleChanges) {
    if (changes['appRobotSimulatorDisabledButton']) {
      this.#updateDisabledState();
      this.#updateTitle();
    }
  }

  #updateDisabledState() {
    const isDisabled = this.appRobotSimulatorDisabledButton();
    if (isDisabled) {
      this.#renderer.setStyle(this.#el.nativeElement, 'cursor', 'not-allowed');
      this.#renderer.setProperty(this.#el.nativeElement, 'disabled', true);
    } else {
      this.#renderer.setStyle(this.#el.nativeElement, 'cursor', 'pointer');
      this.#renderer.setProperty(this.#el.nativeElement, 'disabled', false);
    }
  }

  #updateTitle() {
    const tooltip = this.title();
    if (tooltip) {
      this.#renderer.setAttribute(this.#el.nativeElement, 'title', tooltip);
    } else {
      this.#renderer.removeAttribute(this.#el.nativeElement, 'title');
    }
  }
}
