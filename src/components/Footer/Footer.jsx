import React from 'react';
import './Footer.css';
import logo from '../../assets/cyberdefentech.png'; // Adjust import path as needed


const Footer = () => (
  <div className="footer-container">
    <img src={logo} className="footer-logo" alt="Clarity Money Logo" />
    <div className="footer-content">
      <div className="footer-line">Info Support Marketing</div>
      <div className="footer-divider">Terms of Use:Privacy Policy</div>
      <div className="footer-year">2025 CyberDefentech</div>
    </div>
  </div>
);

export default Footer;