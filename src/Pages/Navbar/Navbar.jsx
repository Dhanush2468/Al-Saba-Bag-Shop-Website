import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Navbar.css';
import logo from './LOGO.png';

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);
  const navigate = useNavigate();

  const handleToggle = () => {
    setIsActive(!isActive);
  };

  const handleSignUp = () => {
    navigate('/signup');
  };
  const handleHome = () => {
    navigate('/');
  };
  const handleAbout = () => {
    navigate('/about');
  };

  return (
    <nav>
      <div className="logo">
        <img onClick={handleHome} src={logo} alt="" className="logo-image" />
      </div>
      <ul className={`nav-links ${isActive ? 'active' : ''}`}>
        <li><a href="#" onClick={handleHome}>Home</a></li>
        <li><a href="#"onClick={handleAbout}>About</a></li>
        <li><a href="#">Contact Us</a></li>
        <li><a className="login-button" onClick={handleSignUp}>Sign-Up</a></li>
      </ul>
      <div className={`burger ${isActive ? 'active' : ''}`} onClick={handleToggle}>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
    </nav>
  );
};

export default Navbar;
