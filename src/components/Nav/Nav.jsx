import React from 'react';
import cl from "./Nav.module.css";
import {NavLink} from "react-router-dom";

const Nav = () => {
    return (
        <nav className={cl.nav}>
            <ul>
                <li><NavLink activeClassName={cl.active} to="/profile">Profile</NavLink></li>
                <li><NavLink activeClassName={cl.active} to="/dialogs">Messages</NavLink></li>
                <li><NavLink activeClassName={cl.active} to="/news">News</NavLink></li>
                <li><NavLink activeClassName={cl.active} to="/music">Music</NavLink></li>
                <li><NavLink activeClassName={cl.active} to="/settings">Settings</NavLink></li>
            </ul>
        </nav>
    );
};

export default Nav;