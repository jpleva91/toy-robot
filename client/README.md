# Toy Robot Simulator

This project simulates a toy robot on a grid. The robot can be placed on the grid, rotated in four directions, and moved forward based on its current direction. The grid allows for intuitive robot control using keyboard input (Arrow keys) to move the robot, rotate it, and reverse its direction.

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
   git clone https://github.com/jpleva/toy-robot-simulator.git
   cd toy-robot-simulator
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
- **Responsive Design**: The application adjusts to different screen sizes and provides clear feedback on the robot's current status (placed, facing direction, etc.).

## Development

To run this project locally, follow these steps:

1. Fork the repository and clone it to your local machine.
2. Install dependencies using `npm install`.
3. To run the development server: `npm start`.

## Test Instructions to Exercise the Application

## Assumptions
