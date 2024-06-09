import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import { BrowserRouter as Router , Route, Switch } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Home from './Home';
import About from './About';
import TodoList from './TodoList';
import EditTodo from './EditTodo';
import NotFound from './NotFound';

const TodoApp = () => {
    const [todos, setTodos] = useState([]);

    const addTodo = (todo) => {
        todo.id = todos.length ? todos[todos.length - 1].id + 1 : 1;
        console.log('Adding Todo: ', todo);
        setTodos([...todos, todo]);
    };

    const deleteTodo = (id) => {
        setTodos(todos.filter(todo => todo.id !== id));
    };

    const updateTodo = (updatedTodo) => {
        setTodos(todos.map(todo => (todo.id === updatedTodo.id ? updatedTodo : todo)));
    };
{
    
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
                        render={() => <addTodo addTodo={addTodo} />}
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
}
};

export default TodoApp;
