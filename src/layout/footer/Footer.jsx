import React from "react";
import { Link } from "react-router-dom";
import { ArrowUp } from "lucide-react";
import "./Footer.css";
import logoimage from "../../assets/images/Luxury Gold S Monogram.png"

const Footer = () => {

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="style-footer">

      <div className="footer-main">

        <div className="footer-brand">

          <Link to="/" className="footer-logo">
            <img src={logoimage} alt="StyleMatch Logo"className="logo-image"/>
            <span className="footer-logo-name">Style<span>Match</span></span>
          </Link>

          <p>
            An AI-powered fashion experience
            designed to help you discover
            your perfect style.
          </p>

          <div className="footer-socials">
            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" >IG</a>
            <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" aria-label="Facebook" >FB</a>
            <a href="https://x.com/" target="_blank" rel="noopener noreferrer" aria-label="X" >X</a>
          </div>

        </div>

        <div className="footer-column">
          <h3>Explore</h3>
          <Link to="/">Home</Link>
          <Link to="/shop">Shop</Link>
          <Link to="/contact">Contact</Link>
        </div>

        <div className="footer-column">
          <h3>Account</h3>
          <Link to="/wishlist">Wishlist</Link>
          <Link to="/cart">Shopping Cart</Link>
          <Link to="/profile">My Profile</Link>
        </div>

        <div className="footer-column">
          <h3>Help</h3>
          <Link to="/">About Us</Link>
          <Link to="/">Privacy Policy</Link>
          <Link to="/">Terms & Conditions</Link>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© 2026 StyleMatch. All rights reserved.</p>
        <button className="back-to-top" onClick={scrollToTop}>Back to top<ArrowUp size={16} /></button>
      </div>

    </footer>
  );
};

export default Footer;