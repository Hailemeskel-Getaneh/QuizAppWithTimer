import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/componentstyle/Header.css';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div className="header">
        <div className="name">
          <span className='question'>?</span>Quiz
        </div>
        <div className={`links ${isMenuOpen ? 'open' : ''}`}>
          <div className="one-links">
            <Link className="link" to="/">
              Home
            </Link>
          </div>
          <div className="one-links">
            <Link className="link" to="/about">
              About
            </Link>
          </div>
          <div className="one-links">
            <Link className="link" to="/help">
              Help
            </Link>
          </div>
          <div className="one-links">
            <Link className="link" to="/contact">
              Contact
            </Link>
          </div>
          <Link to="/login">
            <button className="button1">Login</button>
          </Link>
        </div>
        <div className="hamburger" onClick={toggleMenu}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
      </div>
    </>
  );
}
