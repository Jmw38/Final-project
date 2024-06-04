// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import './components/styles/App.css';

function App() {
  return (
      <div className="App">
        <Router>
        <Header />
        <Navbar />
        <main className="container mt-4">
            <router path="/" exact component={Home} />
            <router path="/about" component={About} />
            <router path="/contact" component={Contact} />
        </main>
        <Footer />
        </Router>
      </div>
  );
}

export default App;




