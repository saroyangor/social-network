import React from 'react';
import "./header.css";

const Header = () => {
    return (
        <header className="header">
            <nav>
                <ul>
                    <li>Main</li>
                    <li>Posts</li>
                    <li>Profile</li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;