import React from 'react';
import Logo from './logo/Logo';
import Navigation from './navigation/Navigation';
import "./header.scss";

const Header = () => {
    return (
        <header>
            <Logo />
            <Navigation />
        </header>
    );
};

export default Header;