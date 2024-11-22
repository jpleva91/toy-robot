export const DIRECTIONS = {
  NORTH: 'NORTH',
  SOUTH: 'SOUTH',
  EAST: 'EAST',
  WEST: 'WEST',
};

export const DIRECTION_MAP = {
  [DIRECTIONS.NORTH]: { x: 0, y: 1 },
  [DIRECTIONS.SOUTH]: { x: 0, y: -1 },
  [DIRECTIONS.EAST]: { x: 1, y: 0 },
  [DIRECTIONS.WEST]: { x: -1, y: 0 },
};

export type DirectionType = (typeof DIRECTIONS)[keyof typeof DIRECTIONS];
