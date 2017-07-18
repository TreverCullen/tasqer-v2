import React from 'react';
import TaskList from '../TaskList/TaskList';
import './task-wrapper.css';

const TaskWrapper = (props) => {
  return (
    <div className="task-wrapper">
      <TaskList title="backlog" />
      <TaskList title="active" />
      <TaskList title="done" />
    </div>
  );
};

export default TaskWrapper;
