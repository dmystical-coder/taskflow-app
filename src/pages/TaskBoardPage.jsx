import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import TaskColumn from '../components/TaskColumn';
import styles from './TaskBoardPage.module.css';

const initialColumns = {
  todo: {
    id: 'todo',
    title: 'To Do',
    tasks: [
      { id: 'task-1', title: 'Write unit tests for LoginPage' },
      { id: 'task-2', title: 'Build the TaskCard component' },
    ],
  },
  inProgress: {
    id: 'inProgress',
    title: 'In Progress',
    tasks: [
      { id: 'task-3', title: 'Set up Auth Context' },
    ],
  },
  done: {
    id: 'done',
    title: 'Done',
    tasks: [
      { id: 'task-4', title: 'Implement login and signup UI' },
    ],
  },
};

const TaskBoardPage = () => {
  const [columns, setColumns] = useState(initialColumns);

  const columnOrder = ['todo', 'inProgress', 'done'];

  return (
    <div className={styles.pageContainer}>
      <Navbar />
      <main className={styles.boardContainer}>
        {columnOrder.map(columnId => {
          const column = columns[columnId];
          return (
            <TaskColumn
              key={column.id}
              title={column.title}
              tasks={column.tasks}
            />
          );
        })}
      </main>
    </div>
  );
};

export default TaskBoardPage;