import React, { useState } from 'react';
import { Form, Button, ListGroup } from 'react-bootstrap';

const AddTodo = ({ addTodo }) => {
    const [todoTitle, setTodoTitle] = useState('');
    const [todoDescription, setTodoDescription] = useState('');
    const [taskTitle, setTaskTitle] = useState('');
    const [taskDescription, setTaskDescription] = useState('');
    const [tasks, setTasks] = useState([]);

    const handleAddTask = () => {
        if (taskTitle && taskDescription) {
            setTasks([...tasks, { title: taskTitle, description: taskDescription }]);
            setTaskTitle('');
            setTaskDescription('');
        } else {
            console.log('Task Title or Task Description is missing');
        }
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        if (todoTitle && todoDescription) {
            const newTodo = { title: todoTitle, description: todoDescription, tasks };
            await addTodo(newTodo);
            setTodoTitle('');
            setTodoDescription('');
            setTasks([]);
        } else {
            console.log('Todo Title or Todo Description is missing');
        }
    };

    return (
        <Form onSubmit={onSubmit}>
           
            <Form.Group controlId="formTaskTitle">
                <Form.Label>Task Title</Form.Label>
                <Form.Control 
                    type="text" 
                    value={taskTitle} 
                    onChange={(e) => setTaskTitle(e.target.value)} 
                    placeholder="Enter task title" 
                />
            </Form.Group>
            <Form.Group controlId="formTaskDescription">
                <Form.Label>Task Description</Form.Label>
                <Form.Control 
                    type="text" 
                    value={taskDescription} 
                    onChange={(e) => setTaskDescription(e.target.value)} 
                    placeholder="Enter task description" 
                />
            </Form.Group>
            <Button variant="secondary" onClick={handleAddTask} className="mt-2">Add Task</Button>
            
            <ListGroup className="mt-3">
                {tasks.map((task, index) => (
                    <ListGroup.Item key={index}>
                        <h5>{task.title}</h5>
                        <p>{task.description}</p>
                    </ListGroup.Item>
                ))}
            </ListGroup>
        </Form>
    );
};

export default AddTodo;




