import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer>
      <div className="content">
        <div className="top">
          <div className="logo-details">
            <i className="fab fa-slack"></i>
            <span className="logo_name">AL-SABA</span>
          </div>
          <div className="media-icons">
            <a href="#"><i className="fab fa-facebook-f"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
            <a href="#"><i className="fab fa-linkedin-in"></i></a>
            <a href="#"><i className="fab fa-youtube"></i></a>
          </div>
        </div>
        <div className="link-boxes">
          <ul className="box">
            <li className="link_name"></li>
            <li><a href="#">Home</a></li>
            <li><a href="#">Contact us</a></li>
            <li><a href="#">About us</a></li>
            <li><a href="#">Get started</a></li>
          </ul>
          <ul className="box">
            <li className="link_name">Products</li>
            <li><a href="#">School-Bags</a></li>
            <li><a href="#">Collage-Bags</a></li>
            <li><a href="#">Lunch-Bags</a></li>
            <li><a href="#">Girls-Bags</a></li>
          </ul>
          <ul className="box">
            <li className="link_name"></li>
            <li><a href="#">Toorist-Bags</a></li>
            <li><a href="#">Duffel-Bags</a></li>
            <li><a href="#">Seeling-Bags</a></li>
            <li><a href="#">Ladies-Perse</a></li>
          </ul>
          <ul className="box input-box">
            <li className="link_name">Subscribe</li>
            <li><input type="text" placeholder="Enter your email" /></li>
            <li><input type="button" value="Subscribe" /></li>
          </ul>
        </div>
      </div>
      <div className="bottom-details">
        <div className="bottom_text">
          <span className="copyright_text">
            Copyright &#169; 2023 <a href="#">Al-Sabba.</a>
            All rights reserved
          </span>
          <span className="policy_terms">
            <a href="#">Privacy policy</a>
            <a href="#">Terms & condition</a>
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
