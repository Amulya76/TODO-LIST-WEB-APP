import React from 'react';

const TodoItem = ({ task, toggleComplete, deleteTodo }) => {
  return (
    <li className={task.completed ? 'completed' : ''}>
      <div>
        <input
          type="checkbox"
          checked={task.completed}
          onChange={toggleComplete}
        />
        <span>{task.task}</span>
        <span className="priority">{task.priority}</span>
        <span className="due-date">{task.dueDate}</span>
      </div>
      <button onClick={deleteTodo}>Delete</button>
    </li>
  );
};

export default TodoItem;