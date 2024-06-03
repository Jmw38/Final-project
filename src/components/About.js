import React from "react";
import { Link } from "react-router-dom";

function about() {
    return (
        <div className="container">
            <Link to="/">Home</Link>
            <Link to="/about">About Us</Link>
            <Link to="/contact">Contact Us</Link>
            <Link to="/shop">Shop</Link>
            <h2>About Us</h2>
            <p>this is the about page of our finnal project.</p>
        </div>
    );
}
export default about;