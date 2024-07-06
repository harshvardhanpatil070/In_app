import React, { useState } from 'react';
import './Header.css';
import andhar from '../images/Andhar.png'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="header">
      <div className="logo"><a href='#home'><img src={andhar}></img></a></div>
      <nav className={`nav ${isOpen ? 'open' : ''}`}>
        <ul>
          <li><a href="#features">Features</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#download">Download</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
      <div className={`hamburger ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
    </header>
  );
};

export default Header;
