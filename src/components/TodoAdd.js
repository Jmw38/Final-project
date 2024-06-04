// src/components/TodoAdd.js
import React, { useState } from 'react';
import TodoForm from './TodoForm';
import './styles/TodoAdd.css';

function TodoAdd({ addTodo }) {
  const [isFormVisible, setIsFormVisible] = useState(false);

  const handleAddButtonClick = () => {
    setIsFormVisible(true);
  };

  const handleFormSubmit = (todo) => {
    addTodo(todo);
    setIsFormVisible(false);
  };

  return (
    <div className="todo-add">
      {!isFormVisible && (
        <button onClick={handleAddButtonClick} className="add-button">
          Add Todo
        </button>
      )}
      {isFormVisible && (
        <TodoForm addTodo={handleFormSubmit} />
      )}
    </div>
  );
}

export default TodoAdd;
