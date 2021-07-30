import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = (props) => {
    return (
        <div className="navBar">
        <NavLink className="navlink" to="/">Home</NavLink>
        <NavLink className="navlink" to="/chats">Chats</NavLink>
        <NavLink className="navlink" to="/profile">Profile</NavLink>
        </div>
    );
}

export default NavBar;