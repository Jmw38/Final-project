import React, { useState, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useParams, useHistory } from 'react-router-dom';

const EditTodo = ({ todos, updateTodo }) => {
    const { id } = useParams();
    const history = useHistory();
    const todoToEdit = todos.find(todo => todo.id === parseInt(id));
    const [title, setTitle] = useState(todoToEdit ? todoToEdit.title : '');
    const [description, setDescription] = useState(todoToEdit ? todoToEdit.description : '');

    useEffect(() => {
        if (!todoToEdit) {
            history.push('/todos');
        }
    }, [todoToEdit, history]);

    const onSubmit = async (e) => {
        e.preventDefault();
        if (title && description) {
            const updatedTodo = { id: parseInt(id), title, description };
            await updateTodo(updatedTodo);
            history.push('/todos');
        } else {
            console.log('Title or Description is missing');
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
            <Button variant="primary" type="submit">Update Todo</Button>
        </Form>
    );
};

export default EditTodo;

