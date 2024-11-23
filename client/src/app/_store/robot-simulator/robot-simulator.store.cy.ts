import { RobotSimulatorStore } from './robot-simulator.store';
import { DIRECTIONS } from '../../_shared/constants';
import { TestBed } from '@angular/core/testing';

describe('RobotSimulatorStore', () => {
  let store: any;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RobotSimulatorStore],
    });

    store = TestBed.inject(RobotSimulatorStore);
  });

  describe('setGridSize', () => {
    it('should set the grid size correctly', () => {
      store.setGridSize(5);
      expect(store.gridSize()).to.equal(5);
    });
  });

  describe('place', () => {
    it('should place the robot correctly if the grid size is set', () => {
      store.setGridSize(5);
      store.place({ x: 2, y: 2, direction: DIRECTIONS.NORTH });

      const position = store.position();
      expect(position).to.deep.equal({
        x: 2,
        y: 2,
        direction: DIRECTIONS.NORTH,
      });
    });

    it('should not place the robot if grid size is not set', () => {
      store.place({ x: 2, y: 2, direction: DIRECTIONS.NORTH });
      const position = store.position();
      expect(position).to.deep.equal({
        x: undefined,
        y: undefined,
        direction: undefined,
      });
    });
  });

  describe('move', () => {
    it('should move the robot within grid bounds', () => {
      store.setGridSize(5);
      store.place({ x: 2, y: 2, direction: DIRECTIONS.NORTH });

      store.move();
      const position = store.position();
      expect(position).to.deep.equal({
        x: 2,
        y: 3,
        direction: DIRECTIONS.NORTH,
      });
    });

    it('should not move the robot outside grid bounds', () => {
      store.setGridSize(5);
      store.place({ x: 4, y: 4, direction: DIRECTIONS.NORTH });

      store.move();
      const position = store.position();
      expect(position).to.deep.equal({
        x: 4,
        y: 4,
        direction: DIRECTIONS.NORTH,
      });
    });

    it('should not move if the robot is not placed', () => {
      store.move();
      const position = store.position();
      expect(position).to.deep.equal({
        x: undefined,
        y: undefined,
        direction: undefined,
      });
    });
  });

  describe('rotateLeft', () => {
    it('should rotate the robot to the left (counterclockwise)', () => {
      store.setGridSize(5);
      store.place({ x: 2, y: 2, direction: DIRECTIONS.NORTH });

      store.rotateLeft();
      const position = store.position();
      expect(position.direction).to.equal(DIRECTIONS.WEST);
    });

    it('should not rotate if the robot is not placed', () => {
      store.rotateLeft();
      const position = store.position();
      expect(position).to.deep.equal({
        x: undefined,
        y: undefined,
        direction: undefined,
      });
    });
  });

  describe('rotateRight', () => {
    it('should rotate the robot to the right (clockwise)', () => {
      store.setGridSize(5);
      store.place({ x: 2, y: 2, direction: DIRECTIONS.NORTH });

      store.rotateRight();
      const position = store.position();
      expect(position.direction).to.equal(DIRECTIONS.EAST);
    });

    it('should not rotate if the robot is not placed', () => {
      store.rotateRight();
      const position = store.position();
      expect(position).to.deep.equal({
        x: undefined,
        y: undefined,
        direction: undefined,
      });
    });
  });

  describe('computed properties', () => {
    it('should correctly compute isPlaced', () => {
      store.setGridSize(5);
      store.place({ x: 2, y: 2, direction: DIRECTIONS.NORTH });
      expect(store.isPlaced()).to.be.true;

      store.place({ x: undefined, y: undefined, direction: undefined });
      expect(store.isPlaced()).to.be.false;
    });

    it('should correctly compute isOnGrid', () => {
      store.setGridSize(5);
      store.place({ x: 2, y: 2, direction: DIRECTIONS.NORTH });
      expect(store.isOnGrid()).to.be.true;

      store.place({ x: 5, y: 5, direction: DIRECTIONS.NORTH });
      expect(store.isOnGrid()).to.be.false;
    });

    it('should correctly compute report', () => {
      store.setGridSize(5);
      store.place({ x: 2, y: 2, direction: DIRECTIONS.NORTH });
      expect(store.report()).to.equal('2,2,NORTH');
    });

    it('should correctly generate the grid', () => {
      store.setGridSize(5);
      store.place({ x: 2, y: 2, direction: DIRECTIONS.NORTH });

      const grid = store.grid();
      expect(grid[2][2].direction).to.equal(DIRECTIONS.NORTH);
      expect(grid[0][0].direction).to.be.undefined;
    });
  });
});
