import React from 'react'; 

import Header from './components/Header';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import './App.css';


function App() {
  return (
    <Router>
      <Header />
      <Navbar />
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      <Footer />
    </Router>
  );
}

export default App;


