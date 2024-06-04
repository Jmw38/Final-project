// src/components/TodoItem.js
import React from 'react';
import './styles/TodoItem.css';

function TodoItem({ todo, index, deleteTodo }) {
  return (
    <div className="todo-item">
      <span>{todo.text}</span>
      <button onClick={() => deleteTodo(index)}>Delete</button>
    </div>
  );
}

export default TodoItem;


