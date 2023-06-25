import React from "react";
import { Link } from "react-router-dom";
import './style.css';

export const Navbar = () => {
    return (
        <div className="navbar">
            <ul className="navbar_list">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/profile">Profile</Link></li>
                <li><Link to="/setting">Settings</Link></li>
            </ul>
        </div>
    )
}