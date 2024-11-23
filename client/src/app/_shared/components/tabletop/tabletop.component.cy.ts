import { TabletopComponent } from './tabletop.component';

describe('TabletopComponent', () => {
  beforeEach(() => {
    const grid = [
      [{ x: 0, y: 0, direction: 'NORTH' }],
      [{ x: 0, y: 1, direction: 'EAST' }],
      [{ x: 0, y: 2, direction: 'SOUTH' }],
      [{ x: 0, y: 3, direction: 'WEST' }],
      [{ x: 0, y: 4, direction: undefined }],
    ];

    cy.mount(
      `<app-tabletop [grid]="grid" (placeRobot)="placeRobot($event)"></app-tabletop>`,
      {
        componentProperties: {
          grid: grid,
          placeRobot: cy.spy().as('placeRobotSpy'),
        },
        imports: [TabletopComponent],
      }
    );
  });

  it('should render the grid and display the robot', () => {
    cy.get('.grid').should('exist');
    cy.get('[data-cy="robot-cell"]').should('have.length', 5);

    cy.get('.robot--north').should('exist');
    cy.get('.robot--east').should('exist');
    cy.get('.robot--south').should('exist');
    cy.get('.robot--west').should('exist');
  });

  it('should emit placeRobot when triggered', () => {
    cy.get('[data-cy="robot-cell"]').first().click();

    cy.get('@placeRobotSpy').should('have.been.calledWith', { x: 0, y: 0 });
  });
});
