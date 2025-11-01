import React from 'react';
import styles from './TaskCard.module.css';

const TaskCard = ({ task }) => {
  return (
    <div className={styles.taskCard}>
      <p>{task.title}</p>
      {/* Later, we can add delete/edit buttons here */}
    </div>
  );
};

export default TaskCard;