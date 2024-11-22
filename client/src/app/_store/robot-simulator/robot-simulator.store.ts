import {
  patchState,
  signalStore,
  withComputed,
  withMethods,
  withState,
} from '@ngrx/signals';
import { computed } from '@angular/core';
import {
  generateGrid,
  isRobotOnGrid,
  isRobotPlaced,
  RobotSimulatorState,
  rotateDirection,
} from './robot-simulator.helpers';
import { DIRECTION_MAP } from '../../_shared/constants';

const initialState: RobotSimulatorState = {
  x: undefined,
  y: undefined,
  direction: undefined,
  gridSize: undefined,
};

export const RobotSimulatorStore = signalStore(
  withState(initialState),
  withComputed(({ x, y, direction, gridSize }) => ({
    isPlaced: computed(() =>
      isRobotPlaced({
        x: x(),
        y: y(),
        direction: direction(),
        gridSize: gridSize(),
      })
    ),
    isOnGrid: computed(() =>
      isRobotOnGrid({ x: x(), y: y(), gridSize: gridSize() })
    ),
    report: computed(() => `${x()},${y()},${direction()}`),
    grid: computed(() => generateGrid(x(), y(), direction(), gridSize())),
  })),
  withMethods((store) => ({
    setGridSize(size: number) {
      patchState(store, (state) => ({ ...state, gridSize: size }));
    },
    place({ x, y, direction }: Omit<RobotSimulatorState, 'gridSize'>) {
      return patchState(store, (state) => {
        if (!state.gridSize) {
          console.warn('Grid size must be set before placing the robot.');
          return state;
        }
        return { ...state, x, y, direction };
      });
    },
    move() {
      return patchState(store, (state) => {
        if (!store.isPlaced()) {
          console.warn('Robot is not placed. Please place the robot first.');
          return state;
        }
        const { x, y, direction, gridSize } = state;
        if (isRobotPlaced({ x, y, direction, gridSize })) {
          const { x: xDirection, y: yDirection } = DIRECTION_MAP[direction!];
          const newX = x! + xDirection;
          const newY = y! + yDirection;

          if (isRobotOnGrid({ x: newX, y: newY, gridSize })) {
            return { ...state, x: newX, y: newY };
          } else {
            console.warn(
              'Move is out of bounds. The robot cannot move off the grid.'
            );
          }
        }
        return state;
      });
    },
    rotateLeft() {
      return patchState(store, (state) => {
        if (!store.isPlaced()) {
          console.warn('Robot is not placed. Please place the robot first.');
          return state;
        }
        const { direction } = state;
        if (direction) {
          return { ...state, direction: rotateDirection(direction, true) }; // Rotate left
        }
        return state;
      });
    },
    rotateRight() {
      return patchState(store, (state) => {
        if (!store.isPlaced()) {
          console.error('Robot is not placed. Please place the robot first.');
          return state;
        }
        const { direction } = state;
        if (direction) {
          return { ...state, direction: rotateDirection(direction, false) }; // Rotate right
        }
        return state;
      });
    },
  }))
);
