import React from "react";
import { Link } from "react-router-dom";

function Contact() {
    return (
        <div className="container">
            <Link to="/">Home</Link>
            <Link to="/about">About Us</Link>
            <Link to="/contact">Contact Us</Link>
            <Link to="/shop">Shop</Link>
            <h2>Contact Us</h2>
            <p>This is the contact page of our finnal project.</p>
        </div>
    );
}

export default Contact;