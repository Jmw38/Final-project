// src/components/TodoList.js
import React from 'react';
import TodoItem from './TodoItem';
import './styles/TodoList.css';

function TodoList({ todos, deleteTodo }) {
  return (
    <div className="todo-list">
      {todos.map((todo, index) => (
        <TodoItem key={index} index={index} todo={todo} deleteTodo={deleteTodo} />
      ))}
    </div>
  );
}

export default TodoList;

