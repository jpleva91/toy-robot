# Toy Robot Simulator

This project simulates a toy robot on a grid. The robot can be placed on the grid, rotated in four directions, and moved forward based on its current direction. The grid allows for intuitive robot control using keyboard input (Arrow keys) to move the robot, rotate it, and reverse its direction.

## Deployed App
The application can be accessed via the AWS CloudFront URL: [https://d2uwh5jf6iob12.cloudfront.net/](https://d2uwh5jf6iob12.cloudfront.net/)

## Features

- **Place the Robot**: Place the robot at any location on the grid.
- **Move the Robot**: Move the robot forward in the direction it is facing.
- **Rotate the Robot**: Rotate the robot 90 degrees left or right.
- **Reverse the Robot**: Rotate the robot 180 degrees using the "ArrowDown" key (reversing the direction).
- **Grid**: The grid is represented as a 2D array with adjustable grid size.
- **User Interaction**: The robot can be controlled using the Arrow keys on your keyboard.

## Requirements

- **Angular 18**: This project is built using Angular 18 and utilizes the latest syntax for component, store management, and event handling.
- **@ngrx/signals**: We use the new `signalStore` and `@ngrx/signals` package for state management.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/jpleva91/toy-robot.git
   cd client
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Run the application:
   ```bash
   npm start
   ```

The app should now be running at `http://localhost:4201/`.

## Usage

### Keyboard Controls
- **ArrowUp**: Move the robot forward in the direction it is facing.
- **ArrowDown**: Reverse the robot's direction (rotate 180 degrees).
- **ArrowLeft**: Rotate the robot 90 degrees counterclockwise (left).
- **ArrowRight**: Rotate the robot 90 degrees clockwise (right).

### Interaction Flow:
1. **Set the Grid Size**: You can set the grid size when the app starts, or adjust it as needed.
2. **Place the Robot**: Place the robot at any position on the grid.
3. **Move the Robot**: Use the ArrowUp key to move the robot forward.
4. **Rotate the Robot**: Use ArrowLeft and ArrowRight to rotate the robot in the desired direction.
5. **Reverse the Robot**: Press the ArrowDown key to reverse the robot’s direction.

### Grid Display
The grid is visualized on the screen with the robot's current position. The grid is dynamically updated as the robot moves, rotates, or is placed at a new position.

## Architecture
- **State Management**: The state of the robot is managed using `@ngrx/signals` store, which enables reactive and efficient state updates.
- **Component Structure**: The grid and robot are handled using Angular components, with the state being updated in real-time based on user interactions.
- **Responsive Design**: The application uses a reactive grid and flex layout to adjust to different screen sizes.
- **Component Testing**: The application includes Cypress component tests to ensure the functionality of the robot and grid components.

## Development
To run this project locally, follow these steps:

1. Fork the repository and clone it to your local machine.
2. Install dependencies using `npm install`.
3. To run the development server: `npm start`.

## Testing
This project uses Cypress Component testing.

To run the tests for this project, use the following command:

```bash
npm run cypress:open
```

Then select the "Component Testing" option to run the tests.

## Test Instructions to Exercise the Application
1. To place the robot on the grid, click on the grid cell where you want to place the robot. By default, the robot is placed facing North.
2. Use the Arrow keys to move the robot forward(ArrowUp), rotate it(ArrowLeft,ArrowRight), or reverse its direction (ArrowDown).
3. The robot can also be rotated using the Rotate Left and Rotate Right buttons.
4. The Move button moves the robot forward in the direction it is facing.
5. The robot cannot move outside the grid boundaries.
6. The report button displays the current position and direction of the robot.
7. The buttons and keys will be disabled until the robot is placed on the grid.

## Assumptions
1. The behaviour of the arrow keys is as follows:
    - ArrowUp: Move the robot forward in the direction it is facing.
    - ArrowDown: Reverse the robot's direction (rotate 180 degrees).
    - ArrowLeft: Rotate the robot 90 degrees counterclockwise (left).
    - ArrowRight: Rotate the robot 90 degrees clockwise (right).
2. The button controls are disabled with a title tooltip until the robot is placed.
