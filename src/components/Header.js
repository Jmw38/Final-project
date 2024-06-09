import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => (
    <Navbar bg="dark" variant="dark" expand="lg">
        <Navbar.Brand as={Link} to="/">ToDo List</Navbar.Brand>
        <Nav className="mr-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/about">About</Nav.Link>
            <Nav.Link as={Link} to="/todos">Todo List</Nav.Link>
            <Nav.Link as={Link} to="/add-todo">Add Todo</Nav.Link>
        </Nav>
    </Navbar>
);

export default Header;


