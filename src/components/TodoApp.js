import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import axios from 'axios';
import Header from './Header';
import Footer from './Footer';
import Home from './Home';
import About from './About';
import TodoList from './TodoList';
import AddTodo from './AddTodo';
import EditTodo from './EditTodo';
import NotFound from './NotFound';

const TodoApp = () => {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        fetchTodos();
    }, []);

    const fetchTodos = async () => {
        try {
            const response = await axios.get('http://localhost:5000/api/todos');
            setTodos(response.data);
        } catch (error) {
            console.error('Error fetching todos:', error);
        }
    };

    const addTodo = async (todo) => {
        try {
            const response = await axios.post('http://localhost:5000/api/todos', todo);
            setTodos([...todos, response.data]);
        } catch (error) {
            console.error('Error adding todo:', error);
        }
    };

    const deleteTodo = async (id) => {
        try {
            await axios.delete(`http://localhost:5000/api/todos/${id}`);
            setTodos(todos.filter(todo => todo.id !== id));
        } catch (error) {
            console.error('Error deleting todo:', error);
        }
    };

    const updateTodo = async (updatedTodo) => {
        try {
            const response = await axios.put(`http://localhost:5000/api/todos/${updatedTodo.id}`, updatedTodo);
            setTodos(todos.map(todo => (todo.id === response.data.id ? response.data : todo)));
        } catch (error) {
            console.error('Error updating todo:', error);
        }
    };

    return (
        <Router>
            <Header />
            <Container>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/about" component={About} />
                    <Route 
                        path="/todos" 
                        render={() => <TodoList todos={todos} deleteTodo={deleteTodo} />} 
                    />
                    <Route 
                        path="/add-todo" 
                        render={() => <AddTodo addTodo={addTodo} />} 
                    />
                    <Route 
                        path="/edit-todo/:id" 
                        render={() => <EditTodo todos={todos} updateTodo={updateTodo} />} 
                    />
                    <Route component={NotFound} />
                </Switch>
            </Container>
            <Footer />
        </Router>
    );
};

export default TodoApp;
