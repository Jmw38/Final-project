import React, { useState } from 'react';
import { Form, Button, ListGroup } from 'react-bootstrap';

const AddTodo = ({ addTodo }) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [task, setTask] = useState('');
    const [tasks, setTasks] = useState([]);

    const handleAddTask = () => {
        if (task) {
            setTasks([...tasks, task]);
            setTask('');
        }
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        if (title && description) {
            const newTodo = { title, description, tasks };
            await addTodo(newTodo);
            setTitle('');
            setDescription('');
            setTasks([]);
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
            <Form.Group controlId="formTask">
                <Form.Label>Task</Form.Label>
                <Form.Control 
                    type="text" 
                    value={task} 
                    onChange={(e) => setTask(e.target.value)} 
                    placeholder="Enter task" 
                />
                <Button variant="secondary" onClick={handleAddTask} className="mt-2">Add Task</Button>
            </Form.Group>
            <ListGroup className="mt-3">
                {tasks.map((task, index) => (
                    <ListGroup.Item key={index}>{task}</ListGroup.Item>
                ))}
            </ListGroup>
        </Form>
    );
};

export default AddTodo;



