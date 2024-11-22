import { DIRECTIONS, DirectionType } from '../../_shared/constants';

export type RobotSimulatorState = {
  x: number | undefined;
  y: number | undefined;
  direction: DirectionType | undefined;
  gridSize: number | undefined;
};

export function isRobotOnGrid({
  x,
  y,
  gridSize,
}: Omit<RobotSimulatorState, 'direction'>): boolean {
  return (
    x !== undefined &&
    y !== undefined &&
    gridSize !== undefined &&
    x >= 0 &&
    x < gridSize &&
    y >= 0 &&
    y < gridSize
  );
}

export function isRobotPlaced({
  x,
  y,
  direction,
}: RobotSimulatorState): boolean {
  return x !== undefined && y !== undefined && direction !== undefined;
}

export function generateGrid(
  x: number | undefined,
  y: number | undefined,
  direction: DirectionType | undefined,
  gridSize: number | undefined
) {
  const size = gridSize;
  if (!size) return [];

  return Array.from({ length: size }, (_, rowIndex) =>
    Array.from({ length: size }, (_, colIndex) => {
      const adjustedY = size - 1 - rowIndex;
      return x === colIndex && adjustedY === y
        ? { x: colIndex, y: adjustedY, direction }
        : { x: colIndex, y: adjustedY, direction: undefined };
    })
  );
}

export function rotateDirection(
  direction: DirectionType,
  isLeft: boolean
): DirectionType {
  const directions = [
    DIRECTIONS.NORTH,
    DIRECTIONS.EAST,
    DIRECTIONS.SOUTH,
    DIRECTIONS.WEST,
  ];
  const currentIndex = directions.indexOf(direction);
  const nextIndex = isLeft
    ? (currentIndex + 3) % directions.length
    : (currentIndex + 1) % directions.length;
  return directions[nextIndex];
}
