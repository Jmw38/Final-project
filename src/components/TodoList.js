import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({ todos, deleteTodo }) => (
    <div>
        {todos.length === 0 && <p>No todos available.</p>}
        {todos.map(todo => (
            <TodoItem key={todo.id} todo={todo} deleteTodo={deleteTodo} />
        ))}
    </div>
);

export default TodoList;



