import React from 'react';
import TaskCard from './TaskCard';
import styles from './TaskColumn.module.css';

const TaskColumn = ({ title, tasks }) => {
  return (
    <div className={styles.taskColumn}>
      <h3 className={styles.columnTitle}>{title}</h3>
      <div className={styles.taskList}>
        {tasks.map(task => (
          <TaskCard key={task.id} task={task} />
        ))}
      </div>
    </div>
  );
};

export default TaskColumn;