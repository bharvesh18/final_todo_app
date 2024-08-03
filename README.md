Sure! Here's a sample README file for your `Tasks` component:

---

# iTask - Todo Management App

## Overview

`iTask` is a simple React application for managing tasks. It allows users to add, edit, move, and delete tasks. Tasks can be categorized into "Your Tasks" and "Completed Tasks". The application uses local storage to persist data across sessions.

## Features

- **Add a Task**: Enter a task and click "SAVE" to add it to the list.
- **Edit a Task**: Click the edit button next to a task to modify its name.
- **Move a Task**: Check the box next to a task to move it to the "Completed Tasks" section.
- **Delete a Task**: Click the delete button to remove a task from either section.
- **View Tasks**: See your tasks and completed tasks in separate sections.

## Installation

1. **Clone the Repository**

   ```bash
   git clone <repository-url>
   ```

2. **Navigate to the Project Directory**

   ```bash
   cd <project-directory>
   ```

3. **Install Dependencies**

   Make sure you have [Node.js](https://nodejs.org/) installed. Then run:

   ```bash
   npm install
   ```

## Usage

1. **Start the Development Server**

   ```bash
   npm start
   ```

2. **Open in Browser**

   Open your browser and navigate to `http://localhost:3000` to see the app in action.

## Components

### `Tasks`

- **State Management**:
  - `todo`: Current task input value.
  - `todos`: List of tasks.
  - `comptodos`: List of completed tasks.
  - `editTask`: Task currently being edited.

- **Functions**:
  - `useEffect`: Fetches tasks from local storage on component mount.
  - `addTask()`: Adds a new task or updates an existing task.
  - `handleChange(e)`: Updates the `todo` state based on user input.
  - `moveTodo(e)`: Moves a task to the completed tasks list.
  - `removeTodo(e)`: Moves a task back to the pending tasks list.
  - `handleEdit(e)`: Sets the current task for editing.
  - `deltodo(e)`: Deletes a task from either the pending or completed list.

## Local Storage

Tasks are stored in local storage under the keys `todos` and `comptodos`. This allows data persistence even after the browser is closed.
