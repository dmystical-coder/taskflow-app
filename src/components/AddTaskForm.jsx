import React, { useState } from 'react';
import styles from './AddTaskForm.module.css';

/**
 * A form component for adding new tasks.
 * @param {object} props
 * @param {function} props.onAddTask - The callback function to call when a task is added.
 * @param {string} props.columnId - The ID of the column to add the task to.
 */
const AddTaskForm = ({ onAddTask, columnId }) => {
  const [title, setTitle] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!title.trim()) {
      return; // Don't add empty tasks
    }
    
    // Call the onAddTask function passed from the parent
    onAddTask(title, columnId);
    
    setTitle(''); // Clear the input field
  };

  return (
    <form onSubmit={handleSubmit} className={styles.addTaskForm}>
      <input
        type="text"
        className={styles.taskInput}
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Enter task title..."
      />
      <button type="submit" className={styles.addButton}>
        Add Task
      </button>
    </form>
  );
};

export default AddTaskForm;