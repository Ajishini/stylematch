import React, { useState } from "react";
import { NavLink, Link, useNavigate, } from "react-router-dom";
import { Heart, Search, ShoppingBag, User, X, Menu, ArrowRight, } from "lucide-react";
import "./Navbar.css";
import logoimage from "../../assets/images/Luxury Gold S Monogram.png"

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const navigate = useNavigate();

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const toggleSearch = () => {
    setSearchOpen((previous) => !previous);
    setMenuOpen(false);
  };

  const handleSearch = (event) => {
    event.preventDefault();

    const search = searchTerm.trim();

    if (!search) {
      navigate("/shop");
      setSearchOpen(false);
      return;
    }

    navigate(`/shop?search=${encodeURIComponent(search)}`);
    setSearchOpen(false);
    setSearchTerm("");
  };

  return (
    <header className="style-navbar">
      <div className="navbar-container">
        <Link to="/" className="style-logo" onClick={closeMenu} >
          <img src={logoimage} alt="StyleMatch Logo"className="logo-image"/>
          <span className="logo-name">
            Style<span>Match</span>
          </span>
        </Link>

        <nav className={`navbar-links ${ menuOpen ? "navbar-links-open" : "" }`} >
          <NavLink to="/shop" onClick={closeMenu} className={({ isActive }) => isActive ? "active" : "" } >
            Shop
          </NavLink>

          <NavLink to="/about" onClick={closeMenu} className={({ isActive }) => isActive ? "active" : "" } >
            About
          </NavLink>

          <NavLink to="/contact" onClick={closeMenu} className={({ isActive }) => isActive ? "active" : "" } >
            Contact
          </NavLink>
        </nav>

        <div className="navbar-actions">
          <button type="button" className={`navbar-icon-button ${ searchOpen ? "search-active" : "" }`} aria-label="Search" title="Search" onClick={toggleSearch}>
            {searchOpen ? (
              <X size={19} strokeWidth={1.7} />
            ) : (
              <Search size={19} strokeWidth={1.7} />
            )}
          </button>

          <NavLink to="/wishlist" className={({ isActive }) => `navbar-icon-button ${ isActive ? "icon-active" : "" }` } aria-label="Wishlist" title="Wishlist" 
          onClick={closeMenu} >
            <Heart size={19} strokeWidth={1.7} />
          </NavLink>

          <NavLink to="/cart" className={({ isActive }) => `navbar-icon-button ${ isActive ? "icon-active" : "" }` } aria-label="Shopping Cart" title="Shopping Cart" 
          onClick={closeMenu} >
            <ShoppingBag size={19} strokeWidth={1.7} />
          </NavLink>

          <NavLink to="/profile" className={({ isActive }) => `navbar-icon-button ${ isActive ? "icon-active" : "" }` } aria-label="Profile" title="Profile" 
          onClick={closeMenu} >
            <User size={19} strokeWidth={1.7} />
          </NavLink>
        </div>

        <button type="button" className="mobile-menu-button" onClick={() => { setMenuOpen((previous) => !previous); setSearchOpen(false); }}
          aria-label={ menuOpen ? "Close menu" : "Open menu" } aria-expanded={menuOpen} >
          {menuOpen ? ( <X size={22} strokeWidth={1.7} /> ) : ( <Menu size={22} strokeWidth={1.7} /> )}
        </button>
      </div>

      <div className={`navbar-search-panel ${ searchOpen ? "navbar-search-panel-open" : "" }`} >
        <form className="navbar-search-form" onSubmit={handleSearch} >
          <Search className="navbar-search-input-icon" size={19} strokeWidth={1.6} />

          <input type="text" value={searchTerm} onChange={(event) => setSearchTerm(event.target.value) }
            placeholder="Search dresses, tops, footwear..." autoFocus={searchOpen} />

          <button type="submit" className="navbar-search-submit" aria-label="Submit search" >
            <ArrowRight size={18} />
          </button>
        </form>

      </div>
    </header>
  );
};

export default Navbar;