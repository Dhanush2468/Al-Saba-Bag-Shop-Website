import React from 'react';
import './Footer.css'
const Footer = () => {
  const currentYear = new Date().getFullYear();

  const handleSubscribe = (event) => {
    event.preventDefault();

    const email = event.target.elements.email.value;

    // Perform validation on the email address
    if (!isValidEmail(email)) {
      // Handle invalid email address
      alert('Please enter a valid email address.');
      return;
    }

    // Perform subscription logic
    // You can make an API call to your backend or perform any other actions here

    // Clear the input field after successful subscription
    event.target.elements.email.value = '';

    // Show a success message or perform any other UI updates
    alert('Thank you for subscribing!');
  };

  const isValidEmail = (email) => {
    // Basic email validation regex pattern
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  };

  return (
    <footer>
      <div className="footer-container">
        
        <div className="footer-links">
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/services">Services</a>
          <a href="/contact">Contact</a>
        </div>
        <div className="social-icons">
          <a href="https://twitter.com/example"><i className="fab fa-twitter"></i></a>
          <a href="https://facebook.com/example"><i className="fab fa-facebook"></i></a>
          <a href="https://linkedin.com/example"><i className="fab fa-linkedin"></i></a>
          <a href="https://instagram.com/example"><i className="fab fa-instagram"></i></a>
        </div>
        <div className="subscribe">
          <h4>Subscribe to Our Newsletter</h4>
          <form onSubmit={handleSubscribe}>
            <input type="email" name="email" placeholder="Your email address" required />
            <button type="submit">Subscribe</button>
          </form>
        </div>
        <div className="footer-content">
          <p>© {currentYear} All rights reserved.</p>
          <p>Powered by AL SABA</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
