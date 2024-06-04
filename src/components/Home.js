// src/components/Home.js
import React, { useState } from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import './styles/Home.css';

function Home() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos([ ...todos, todo ]);
  };

  const deleteTodo = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  return (
    <div className="home">
      <TodoForm addTodo={addTodo} />
      <TodoList todos={todos} deleteTodo={deleteTodo} />
    </div>
  );
}

export default Home;
