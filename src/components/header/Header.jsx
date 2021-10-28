import React from 'react';
import cl from "./Header.module.css";

const Header = () => {
    return (
        <header className={cl.header}>
            <img alt="logo" className={cl.headerImg} src="https://upload.wikimedia.org/wikipedia/commons/1/1e/RPC-JP_Logo.png"/>
        </header>
    );
};

export default Header;