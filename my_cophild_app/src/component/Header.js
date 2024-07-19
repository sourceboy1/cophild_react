import React from 'react';
import './style.css';


const Header = () => {
    return (
        <header className="header">
            <img src="https://shorturl.at/bZOlL" alt="Logo"/>
            <nav className="nav">
            <a href="#home">Home</a>
            <a href='#about'>About</a>
            <a href="#services">Services</a>
            <a href="#contact">Contact</a>
            </nav>
            <div className="buttons">
                <button className="signup-btn">Sign-up</button>
                <button className="login-btn">Log-in</button>
            </div>
        </header>
    );
};

export default Header;
