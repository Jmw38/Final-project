import React from "react";
import { Link } from "react-router-dom";

function Home() {
    return (
        <div className="container">
            <Link to="/" style={{color: "black"}}>Home</Link>
            <Link to="/about" style={{color: "black"}}>About Us</Link>
            <Link to="/contact">Contact Us</Link>
            <Link to="/shop">Shop</Link>    
            <h2>Welcome to the Homepage</h2>
            <p>This is the home page of our finnal project.</p>
        </div>
    );
}

export default Home;