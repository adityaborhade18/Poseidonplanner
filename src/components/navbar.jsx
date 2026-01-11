import React, { useState } from 'react';
import '../style/navbar.css';
import logoImg from '../assets/logo.png'; 

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="navbar">
      <div className="nav-container">
        
        {/* BRAND AREA */}
        <div className="nav-brand">
          <div className="logo-wrapper">
             <img src={logoImg} alt="Poseidon Logo" className="nav-logo-img" />
          </div>
          <span className="logo-text">POSEIDON</span>
        </div>
        
        {/* NAV LINKS: Desktop In-line / Mobile Side-Drawer */}
        <ul className={`nav-links ${isOpen ? "open" : ""}`}>
          <li><a href="#home" onClick={closeMenu}>Home</a></li>
          <li><a href="#about-advisor" onClick={closeMenu}>About Advisor</a></li>
          <li><a href="#about-us" onClick={closeMenu}>About Us</a></li>
          <li><a href="#terms" onClick={closeMenu}>T&C</a></li>
          <li className="nav-cta"><a href="#contact" onClick={closeMenu}>Contact Us</a></li>
        </ul>

        {/* HAMBURGER ICON: Visible only on mobile */}
        <div className={`nav-toggle ${isOpen ? "active" : ""}`} onClick={toggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;