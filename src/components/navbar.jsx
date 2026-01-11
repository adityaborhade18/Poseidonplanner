import React, { useState } from 'react';
import '../style/navbar.css'; // 1. Double-check this path
import logoImg from '../assets/logo.png'; // 2. Ensure file extension is exactly .jpg

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="nav-container">
        
        {/* LEFT SIDE: LOGO & NAME */}
        <div className="nav-brand">
          <div className="logo-wrapper">
             <img 
               src={logoImg} 
               alt="Poseidon Logo" 
               className="nav-logo-img" 
             />
          </div>
          <span className="logo-text">POSEIDON</span>
        </div>
        
        <ul className={`nav-links ${isOpen ? "open" : ""}`}>
          <li><a href="#home">Home</a></li>
          <li><a href="#about-advisor">About Advisor</a></li>
          <li><a href="#about-us">About Us</a></li>
          <li><a href="#terms">T&C</a></li>
          <li className="nav-cta"><a href="#contact">Contact Us</a></li>
        </ul>

        <div className={`nav-toggle ${isOpen ? "active" : ""}`} onClick={() => setIsOpen(!isOpen)}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;