import React from 'react';
import TaskCard from './TaskCard';
import AddTaskForm from './AddTaskForm'; // 1. Import the new form
import styles from './TaskColumn.module.css';

/**
 * 2. Accept the new props: columnId and onAddTask
 */
const TaskColumn = ({ title, tasks, columnId, onAddTask }) => {
  return (
    <div className={styles.taskColumn}>
      <h3 className={styles.columnTitle}>{title}</h3>
      <div className={styles.taskList}>
        {tasks.map(task => (
          <TaskCard key={task.id} task={task} />
        ))}
      </div>
      
      {/* * 3. Conditionally render the AddTaskForm.
       * We only show it if the columnId is 'todo'.
       */}
      {columnId === 'todo' && (
        <AddTaskForm onAddTask={onAddTask} columnId={columnId} />
      )}
    </div>
  );
};

export default TaskColumn;