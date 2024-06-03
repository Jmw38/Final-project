import React from 'react';
import { Link } from 'react-router-dom';


function Header() {
    return (
        <header className='header'>
            <Link to='/'>Home</Link>
            <Link to='/about'>About</Link>
            <Link to='/contact'>Contact</Link>
            <h1>Final Project</h1>
        </header>
    );
}

export default Header;