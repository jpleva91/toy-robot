import {
  isRobotOnGrid,
  isRobotPlaced,
  generateGrid,
  rotateDirection,
} from './robot-simulator.helpers';
import { DIRECTIONS } from '../../_shared/constants';

describe('Robot Simulator Helpers', () => {
  describe('isRobotOnGrid', () => {
    it('should return true if robot is within grid boundaries', () => {
      const result = isRobotOnGrid({ x: 2, y: 2, gridSize: 5 });
      expect(result).to.be.true;
    });

    it('should return false if robot is outside grid boundaries', () => {
      const result = isRobotOnGrid({ x: 5, y: 5, gridSize: 5 });
      expect(result).to.be.false;
    });

    it('should return false if any coordinate is undefined', () => {
      const result = isRobotOnGrid({ x: undefined, y: 2, gridSize: 5 });
      expect(result).to.be.false;
    });
  });

  describe('isRobotPlaced', () => {
    it('should return true if robot has coordinates and direction', () => {
      const result = isRobotPlaced({
        x: 2,
        y: 2,
        direction: DIRECTIONS.NORTH,
        gridSize: 5,
      });
      expect(result).to.be.true;
    });

    it('should return false if robot is missing either coordinates or direction', () => {
      const result = isRobotPlaced({
        x: undefined,
        y: 2,
        direction: DIRECTIONS.NORTH,
        gridSize: 5,
      });
      expect(result).to.be.false;
    });
  });

  describe('generateGrid', () => {
    it('should generate a grid with the correct robot position', () => {
      const grid = generateGrid(1, 1, DIRECTIONS.NORTH, 3);
      expect(grid[1][1]).to.have.property('direction', DIRECTIONS.NORTH);
      expect(grid[0][0]).to.have.property('direction', undefined);
    });

    it('should generate an empty grid when no gridSize is provided', () => {
      const grid = generateGrid(1, 1, DIRECTIONS.NORTH, undefined);
      expect(grid).to.be.empty;
    });

    it('should return an empty grid when x, y are undefined', () => {
      const grid = generateGrid(undefined, undefined, DIRECTIONS.NORTH, 3);
      expect(grid).to.be.empty;
    });
  });

  describe('rotateDirection', () => {
    it('should rotate the direction to the left', () => {
      const newDirection = rotateDirection(DIRECTIONS.NORTH, true);
      expect(newDirection).to.equal(DIRECTIONS.WEST);
    });

    it('should rotate the direction to the right', () => {
      const newDirection = rotateDirection(DIRECTIONS.NORTH, false);
      expect(newDirection).to.equal(DIRECTIONS.EAST);
    });

    it('should return the correct next direction when rotating left or right', () => {
      const leftDirection = rotateDirection(DIRECTIONS.SOUTH, true);
      const rightDirection = rotateDirection(DIRECTIONS.SOUTH, false);
      expect(leftDirection).to.equal(DIRECTIONS.EAST);
      expect(rightDirection).to.equal(DIRECTIONS.WEST);
    });
  });
});
