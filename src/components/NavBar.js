import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = (props) => {
    return (
        <div className="navBar">
        <NavLink className="navlink" exact to="/" activeClassName="activeNav">Home</NavLink>
        <NavLink className="navlink" to="/chats" activeClassName="activeNav">Chats</NavLink>
        <NavLink className="navlink" exact to="/profile" activeClassName="activeNav">Profile</NavLink>
        </div>
    );
}

export default NavBar;