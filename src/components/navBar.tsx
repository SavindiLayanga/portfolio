import React from 'react';
import '../styles/Navbar.css';

const Navbar: React.FC = () => {
    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <a href="/">
                    <img src="/src/assets/logo.jpeg" alt="Logo" className="logo"/>
                </a>
            </div>
            <div className="navbar-menu">
                <ul>
                    <li><a href="#about">BIOGRAPHY</a></li>
                    <li><a href="#expertise">EXPERTISE</a></li>
                    <li><a href="#service">SERVICE</a></li>
                    <li><a href="#contact">CONTACT ME</a></li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;