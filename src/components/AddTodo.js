import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

const NewTodo = {
    title: '',
    description: ''
};
const AddTodo = ({ addTodo }) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const onSubmit = async (e) => {
        e.preventDefault();
        if (title && description) {
            console.log('Submitting Todo:', NewTodo);
            addTodo(NewTodo);
            setTitle('');
            setDescription('');
            console.log('Todo added and form cleared');
        } else {
            console.log('Title or Description is empty');
        }
    };

    return (
        <Form onSubmit={onSubmit}>
            <Form.Group controlId="formTitle">
                <Form.Label>Title</Form.Label>
                <Form.Control 
                    type="text" 
                    value={title} 
                    onChange={(e) => setTitle(e.target.value)} 
                    placeholder="Enter title" 
                />
            </Form.Group>
            <Form.Group controlId="formDescription">
                <Form.Label>Description</Form.Label>
                <Form.Control 
                    type="text" 
                    value={description} 
                    onChange={(e) => setDescription(e.target.value)} 
                    placeholder="Enter description" 
                />
            </Form.Group>
            <Button variant="primary" type="submit">Add Todo</Button>
        </Form>
    );
};

export default AddTodo;


