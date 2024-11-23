import { RobotSimulatorComponent } from './robot-simulator.component';

describe('RobotSimulatorComponent', () => {
  beforeEach(() => {
    cy.mount(RobotSimulatorComponent);
  });

  it('should render the grid and display the robot', () => {
    cy.get('.grid').should('exist');
    cy.get('[data-cy="robot-cell"]').should('have.length', 25); // 5x5 grid
    cy.get('[data-cy="robot-cell"]').first().click(); // Place the robot
    cy.get('[data-cy="robot-cell"]')
      .first()
      .should('contain.class', 'robot--north'); // robot is facing north
  });

  it('should disable the buttons when robot is not placed', () => {
    cy.get('[data-cy="left-button"]').should('be.disabled');
    cy.get('[data-cy="move-button"]').should('be.disabled');
    cy.get('[data-cy="right-button"]').should('be.disabled');
    cy.get('[data-cy="report-button"]').should('be.disabled');
  });

  it('should enable the buttons after placing the robot', () => {
    cy.get('[data-cy="robot-cell"]').first().click();
    cy.get('[data-cy="left-button"]').should('not.be.disabled');
    cy.get('[data-cy="move-button"]').should('not.be.disabled');
    cy.get('[data-cy="right-button"]').should('not.be.disabled');
    cy.get('[data-cy="report-button"]').should('not.be.disabled');
  });

  it('should move the robot when the "Move" button is clicked', () => {
    cy.get('[data-cy="robot-cell"]').first().click();
    cy.get('[data-cy="right-button"]').click();
    cy.get('[data-cy="right-button"]').click();
    cy.get('[data-cy="move-button"]').click();
    cy.get('[data-cy="robot-cell"]')
      .eq(5)
      .should('contain.class', 'robot--south');
  });

  it('should rotate the robot left when the "Left" button is clicked', () => {
    cy.get('[data-cy="robot-cell"]').first().click();
    cy.get('[data-cy="left-button"]').click();
    cy.get('[data-cy="robot-cell"]')
      .first()
      .should('contain.class', 'robot--west');
  });

  it('should rotate the robot right when the "Right" button is clicked', () => {
    cy.get('[data-cy="robot-cell"]').first().click();
    cy.get('[data-cy="right-button"]').click();
    cy.get('[data-cy="robot-cell"]')
      .first()
      .should('contain.class', 'robot--east');
  });

  it('should show the correct report', () => {
    cy.get('[data-cy="robot-cell"]').first().click();
    cy.get('[data-cy="report-button"]').click();
    cy.on('window:alert', (alertText) => {
      expect(alertText).to.contains('0,4,NORTH');
    });
  });
});

it('should not allow the robot to move off the grid', () => {});
it('should move the robot forward when the UpArrow key is pressed', () => {});
it('should rotate the robot left when the LeftArrow key is pressed', () => {});
it('should rotate the robot right when the RightArrow key is pressed', () => {});
it('should flip the robot when the DownArrow key is pressed', () => {});
