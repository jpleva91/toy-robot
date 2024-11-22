import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./_pages/robot-simulator/robot-simulator.component').then(
        (m) => m.RobotSimulatorComponent
      ),
  },
];
