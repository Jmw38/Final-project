import React from "react";
import { Link } from "react-router-dom";


function Footer() {
    return (
        <div className="footer">
            <Link to="/"><img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="logo" /></Link>
            <Link to="/about">About Us</Link>
            <Link to="/contact">Contact Us</Link>
            <Link to="/shop">Shop</Link>
            <p>Thank you for visiting our website!</p>
            <p>Copyright 2024. All rights reserved.</p>
        </div>
    );
}

export default Footer;