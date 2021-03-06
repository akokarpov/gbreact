import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
    return (
        <div className="navBar">
            <NavLink className="navlink" exact to="/" activeClassName="activeNav">Home</NavLink>
            <NavLink className="navlink" to="/chats" activeClassName="activeNav">Chats</NavLink>
            <NavLink className="navlink" exact to="/profile" activeClassName="activeNav">Profile</NavLink>
            <NavLink className="navlink" exact to="/weather" activeClassName="activeNav">Weather API</NavLink>
            <NavLink className="navlink" exact to="/signup" activeClassName="activeNav">Sign Up</NavLink>
            <NavLink className="navlink" exact to="/login" activeClassName="activeNav">Login</NavLink>
        </div>
    );
}

export default NavBar;