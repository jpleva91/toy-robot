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

/**
 * The initial state for the robot simulator.
 * The x, y, and direction properties are undefined until the robot is placed on the grid.
 * The gridSize property is undefined until the grid size is set.
 */
const initialState: RobotSimulatorState = {
  x: undefined,
  y: undefined,
  direction: undefined,
  gridSize: undefined,
};

export const RobotSimulatorStore = signalStore(
  withState(initialState),
  withComputed(({ x, y, direction, gridSize }) => ({
    /**
     * Returns true if the robot is placed on the grid.
     */
    isPlaced: computed(() =>
      isRobotPlaced({
        x: x(),
        y: y(),
        direction: direction(),
        gridSize: gridSize(),
      })
    ),
    /**
     * Returns true if the robot is on the grid and within the bounds of the grid.
     */
    isOnGrid: computed(() =>
      isRobotOnGrid({ x: x(), y: y(), gridSize: gridSize() })
    ),
    /**
     * Returns the report of the robot's position and direction.
     */
    report: computed(() => `${x()},${y()},${direction()}`),
    /**
     * Returns the grid for the tabletop. The grid is a two-dimensional array of cells.
     * Each cell is an object with x, y, and direction properties.
     * The direction property is optional and determines if the robot is in the cell and facing a specific direction.
     */
    grid: computed(() => generateGrid(x(), y(), direction(), gridSize())),
    /**
     * Returns the robot's position on the grid. The cell is an object with x, y, and direction properties.
     * The direction property is optional and determines if the robot is in the cell and facing a specific direction.
     */
    position: computed(() => ({ x: x(), y: y(), direction: direction() })),
  })),
  withMethods((store) => ({
    /**
     * Sets the grid size for the tabletop.
     */
    setGridSize(size: number) {
      patchState(store, (state) => ({ ...state, gridSize: size }));
    },
    /**
     * Places the robot on the grid.
     */
    place({ x, y, direction }: Omit<RobotSimulatorState, 'gridSize'>) {
      return patchState(store, (state) => {
        if (!state.gridSize) {
          console.warn('Grid size must be set before placing the robot.');
          return state;
        }
        return { ...state, x, y, direction };
      });
    },
    /**
     * Moves the robot one unit in the direction it is facing.
     * The robot cannot move off the grid.
     */
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
    /**
     * Rotates the robot 90 degrees to the left
     */
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
    /**
     * Rotates the robot 90 degrees to the right
     */
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
