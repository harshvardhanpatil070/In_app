import React from 'react';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';
import './Footer.css'; 

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h3>Contact Us</h3>
            <p>Email: contact@example.com</p>
            <p>Phone: +1234567890</p>
            <p>Address: 123 Street, City, Country</p>
          </div>
          <div className="col-md-4">
            <h3>Follow Us</h3>
            <div className="social-links">
              <a href="https://facebook.com"><FaFacebook /></a>
              <a href="https://twitter.com"><FaTwitter /></a>
              <a href="https://linkedin.com"><FaLinkedin /></a>
              <a href="https://instagram.com"><FaInstagram /></a>
            </div>
          </div>
          <div className="col-md-4">
            <h3>Additional Links</h3>
            <ul>
              <li><a href="#terms">Terms of Service</a></li>
              <li><a href="#privacy">Privacy Policy</a></li>
              <li><a href="#sitemap">Sitemap</a></li>
            </ul>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <p>&copy; 2024 Your Website. All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
