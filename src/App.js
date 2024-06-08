// src/App.js
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import { TodoistApi } from '@doist/todoist-api-typescript';
import 'bootstrap/dist/css/bootstrap.min.css';


const api = new TodoistApi('f0e9d0a5e6d0e7f6e6b3a9c7e8d0d0b0b0b0b0b');

function App() {
  return (
      <div className="App">
        <Router>
          <container>
        <Header />
        <Navbar />
        <main className="container mt-4">
            <router exact path="/" component={Home} />
            <router path="/about" component={About} />
            <router path="/contact" component={Contact} />
        </main>
        <Footer />
        </container>
        </Router>
      </div>
  );
}




export default App;




