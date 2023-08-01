import React, { useState, useEffect, useRef } from "react";
import "./Navbar.css";
import logo from "../../img/logo-transparent.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navbarRef = useRef(null);
  const isLoggedIn = localStorage.getItem("token");

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navbarRef.current && !navbarRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("click", handleClickOutside);

    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
  };

  return (
    <div className={`navbar ${menuOpen ? "active" : ""}`} ref={navbarRef}>
            <div className="logo">
          <a href="#" onClick={handleMenuToggle}>
            <img src={logo} alt="Logo" />
          </a>
        </div>
      <div className="menu-toggle" onClick={handleMenuToggle}>
        <i className="fas fa-bars"></i>
      </div>
      <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
        <li>
          <a href="/shop" onClick={handleMenuToggle}>
            Shop
          </a>
        </li>
        <li>
          <a href="/about" onClick={handleMenuToggle}>
            About
          </a>
        </li>
        <li>
          <a href="/cart" onClick={handleMenuToggle}>
            Cart
          </a>
        </li>
        <li>
          {isLoggedIn ? (
            <a href="/login" onClick={() => handleLogout()}>
              Logout
            </a>
          ) : (
            <a href="/login" onClick={handleMenuToggle}>
              Login
            </a>
          )}
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
