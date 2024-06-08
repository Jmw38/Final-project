// src/components/TodoList.js
import React, { useState, useEffect } from 'react';
import TodoItem from './TodoItem';
import TodoAdd from './TodoAdd';
import './styles/TodoList.css';

function TodoList() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    // Fetch initial todos from an API or static array
    const fetchTodos = async () => {
      const response = await fetch('https://example.com/api/todos');
      const data = await response.json();
      setTodos(data);
    };
    fetchTodos();
  }, []);

  const addTodo = async (newTodo) => {
    const response = await fetch('https://example.com/api/todos', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newTodo),
    });
    const addedTodo = await response.json();
    setTodos([...todos, addedTodo]);
  };

  const deleteTodo = async (id) => {
    await fetch(`https://example.com/api/todos/${id}`, {
      method: 'DELETE',
    });
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const updateTodo = async (updatedTodo) => {
    const response = await fetch(`https://example.com/api/todos/${updatedTodo.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedTodo),
    });
    const newTodo = await response.json();
    setTodos(todos.map((todo) => (todo.id === newTodo.id ? newTodo : todo)));
  };

  return (
    <div className="todo-list">
      <TodoAdd addTodo={addTodo} /> {/* Add TodoAdd component here */}
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          deleteTodo={deleteTodo}
          updateTodo={updateTodo}
        />
      ))}
    </div>
  );
}

export default TodoList;


