const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = 5000;

app.use(cors());
app.use(bodyParser.json());

let todos = [];
let currentId = 1;

app.get('/api/todos', (req, res) => {
    res.json(todos);
});

app.post('/api/todos', (req, res) => {
    const { title, description } = req.body;
    const newTodo = { id: currentId++, title, description };
    todos.push(newTodo);
    res.json(newTodo);
});

app.put('/api/todos/:id', (req, res) => {
    const { id } = req.params;
    const { title, description } = req.body;
    const todoIndex = todos.findIndex(todo => todo.id === parseInt(id));
    if (todoIndex !== -1) {
        todos[todoIndex] = { id: parseInt(id), title, description };
        res.json(todos[todoIndex]);
    } else {
        res.status(404).send('Todo not found');
    }
});

app.delete('/api/todos/:id', (req, res) => {
    const { id } = req.params;
    todos = todos.filter(todo => todo.id !== parseInt(id));
    res.status(204).send();
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
