// src/components/TodoAdd.js
import React, { useState } from 'react';
import './styles/TodoAdd.css';

function TodoAdd({ addTodo }) {
  const [title, setTitle] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim()) {
      const newTodo = { title, completed: false };
      // Call the passed down addTodo function to add the new todo
      addTodo(newTodo);
      setTitle('');
    }
  };

  return (
    <form className="add-todo-form" onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Add a new todo"
        required
      />
      <button type="submit">Add Todo</button>
    </form>
  );
}

export default TodoAdd;

