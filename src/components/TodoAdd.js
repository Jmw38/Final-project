import React, { useState } from 'react';
import './styles/TodoAdd.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const TodoAdd = ({ addTodo }) => {
  const [todoText, setTodoText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (todoText.trim()) {
      addTodo({
        id: Date.now(),
        text: todoText,
        completed: false,
      });
      setTodoText('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="todo-add-form">
      <input
        type="text"
        value={todoText}
        onChange={(e) => setTodoText(e.target.value)}
        placeholder="Add a new todo"
        className="todo-add-input"
      />
      <button type="submit" className="todo-add-button">Add Todo</button>
    </form>
  );
};

export default TodoAdd;


