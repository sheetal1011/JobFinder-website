import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">

      <div className="nav-left">
        <div className="burger" onClick={() => setMenuOpen(!menuOpen)}>
          <i className="fa-solid fa-bars"></i>
        </div>
        <div className={`nav-links ${menuOpen ? 'show' : ''}`}>
          <Link to="/browse-jobs" onClick={() => setMenuOpen(false)}>Jobs</Link>
          <Link to="/browse-companies" onClick={() => setMenuOpen(false)}>Companies</Link>
          <Link to="/about" onClick={() => setMenuOpen(false)}>About</Link>
          <Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>
        </div>
      </div>

      <div className="nav-center">
        <Link to="/" className="logo">💼 JobFinder</Link>
      </div>

      <div className="nav-right">
        <Link to="/login" className="btn login-btn" onClick={() => setMenuOpen(false)}>Login</Link>
        <Link to="/register" className="btn register-btn" onClick={() => setMenuOpen(false)}>Register</Link>
      </div>
    </nav>
  );
};

export default Navbar;
