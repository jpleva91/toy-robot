import { RobotComponent } from './robot.component';

describe('RobotComponent', () => {
  beforeEach(() => {
    const cellData = { x: 0, y: 0, direction: 'NORTH' };
    cy.mount(
      `<app-robot [cell]="cell" (placeRobot)="placeRobot($event)"></app-robot>`,
      {
        componentProperties: {
          cell: cellData,
          placeRobot: cy.spy().as('placeRobotSpy'),
        },
        imports: [RobotComponent],
      }
    );
  });

  it('should render the robot with correct direction', () => {
    cy.get('[data-cy="robot-cell"]').should('exist');
    cy.get('.robot--north').should('exist');
  });

  it('should emit placeRobot when triggered', () => {
    cy.get('[data-cy="robot-cell"]').click();
    cy.get('@placeRobotSpy').should('have.been.calledWith', { x: 0, y: 0 });
  });
});
