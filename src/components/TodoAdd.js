import React, { useState } from 'react';
import { TodoistApi } from '@doist/todoist-api-typescript';

const api = new TodoistApi('f0e9d0a5e6d0e7f6e6b3a9c7e8d0d0b0b0b0b0b');

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
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={todoText}
        onChange={(e) => setTodoText(e.target.value)}
        placeholder="Add a new todo"
      />
      <button type="submit">Add Todo</button>
    </form>
  );
};

export default TodoAdd;

