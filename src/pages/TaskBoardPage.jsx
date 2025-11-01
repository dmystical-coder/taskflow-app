import React, { useState } from "react";
import Navbar from "../components/Navbar";
import TaskColumn from "../components/TaskColumn";
import styles from "./TaskBoardPage.module.css";

const initialColumns = {
  todo: {
    id: "todo",
    title: "To Do",
    tasks: [
      { id: "task-1", title: "Write unit tests for LoginPage" },
      { id: "task-2", title: "Build the TaskCard component" },
    ],
  },
  inProgress: {
    id: "inProgress",
    title: "In Progress",
    tasks: [{ id: "task-3", title: "Set up Auth Context" }],
  },
  done: {
    id: "done",
    title: "Done",
    tasks: [{ id: "task-4", title: "Implement login and signup UI" }],
  },
};

const TaskBoardPage = () => {
  const [columns, setColumns] = useState(initialColumns);

  const columnOrder = ["todo", "inProgress", "done"];

  /**
   * Handles adding a new task to the correct column.
   * This function will be passed down to the TaskColumn.
   */
  const handleAddTask = (title, columnId) => {
    // Create a simple, unique ID for the new task
    const newTask = {
      id: `task-${Date.now()}`,
      title,
    };

    // --- State Update Logic ---
    // 1. Get the current state
    const newColumns = { ...columns };

    // 2. Get the specific column we're adding to
    const column = newColumns[columnId];

    // 3. Create a new tasks array for that column, adding the new task
    const newTasks = [...column.tasks, newTask];

    // 4. Update the column in our new state object
    newColumns[columnId] = {
      ...column,
      tasks: newTasks,
    };

    // 5. Set the new state
    setColumns(newColumns);
  };

  return (
    <div className={styles.pageContainer}>
      <Navbar />
      <main className={styles.boardContainer}>
        {columnOrder.map((columnId) => {
          const column = columns[columnId];
          return (
            <TaskColumn
              key={column.id}
              columnId={column.id} // <-- Pass the columnId
              title={column.title}
              tasks={column.tasks}
              onAddTask={handleAddTask} // <-- Pass the handler function
            />
          );
        })}
      </main>
    </div>
  );
};

export default TaskBoardPage;
