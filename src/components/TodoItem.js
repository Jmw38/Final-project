import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const TodoItem = ({ todo, deleteTodo }) => (
    <Card className="mb-3">
        <Card.Body>
            <Card.Title>{todo.title}</Card.Title>
            <Card.Text>{todo.description}</Card.Text>
            <Button variant="danger" onClick={() => deleteTodo(todo.id)}>Delete</Button>
            <Button variant="secondary" as={Link} to={`/edit-todo/${todo.id}`}>Edit</Button>
        </Card.Body>
    </Card>
);

export default TodoItem;




