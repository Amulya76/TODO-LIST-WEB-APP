import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({ todos, toggleComplete, deleteTodo }) => {
  return (
    <ul>
      {todos.map((todo, index) => (
        <TodoItem
          key={index}
          task={todo}
          toggleComplete={() => toggleComplete(index)}
          deleteTodo={() => deleteTodo(index)}
        />
      ))}
    </ul>
  );
};

export default TodoList;
