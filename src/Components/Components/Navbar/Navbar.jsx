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
      <div className={`menu-icon ${isActive ? 'active' : ''}`} onClick={handleToggle}>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
      <ul className={`nav-links ${isActive ? 'active' : ''}`}>
        <li><a href="#" onClick={handleHome}>Home</a></li>
        <li><a href="#"onClick={handleAbout} >About</a></li>
        <li><a href="#">Contact Us</a></li>
        <li><a className="login-button" onClick={handleSignUp}>Sign-Up</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
