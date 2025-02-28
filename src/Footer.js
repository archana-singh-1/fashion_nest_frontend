
import React from "react";
import "./footer.css"


const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
      
        <div className="footer-section">
          <h2>About Fashion Nest</h2>
          <p>
            Your go-to destination for the latest fashion trends. Explore our collections and stay stylish!
          </p>
        </div>
        
      
        <div className="footer-section">
          <h2>Quick Links</h2>
          <ul>
            <li>Home</li>
            <li>Shop</li>
            <li>Collections</li>
            <li>Contact</li>
          </ul>
        </div>
        
       
        <div className="footer-section">
          <h2>Stay Updated</h2>
          <input 
            type="email" 
            placeholder="Enter your email" 
            className="footer-input"
          />
          <button className="footer-button">
            Subscribe
          </button>
          <div className="footer-social">
            <i className="fab fa-facebook"></i>
            <i className="fab fa-instagram"></i>
            <i className="fab fa-twitter"></i>
          </div>
        </div>
      </div>
      
    
      <div className="footer-copyright">
        © 2024 Fashion Nest. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
