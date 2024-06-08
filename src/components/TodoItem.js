// src/components/TodoItem.js
import React from 'react';
import './styles/TodoItem.css';

function TodoItem({ todo, deleteTodo, updateTodo }) {
  const handleComplete = () => {
    const updatedTodo = { ...todo, completed: !todo.completed };
    updateTodo(updatedTodo);
  };

  return (
    <div className={`todo-item ${todo.completed ? 'completed' : ''}`}>
      <span>{todo.title}</span>
      <div>
        <button onClick={handleComplete}>
          {todo.completed ? 'Undo' : 'Complete'}
        </button>
        <button onClick={() => deleteTodo(todo.id)}>Delete</button>
      </div>
    </div>
  );
}

export default TodoItem;



