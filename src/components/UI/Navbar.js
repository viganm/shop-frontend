import React, { useState, useEffect, useRef } from "react";
import "./Navbar.css";
import logo from "../../img/LOGO.jpg";

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
      <div className="menu-toggle" onClick={handleMenuToggle}>
        <i className="fas fa-bars"></i>
      </div>
      <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
        <li>
          <a href="/">
            <img src={logo} alt="Logo" />
          </a>
        </li>
        <li>
          <a href="/shop">Shop</a>
        </li>
        <li>
          <a href="/about">About</a>
        </li>
      </ul>
      <ul className={`nav-links right ${menuOpen ? "active" : ""}`}>
        <li>
          <a href="/cart">
            <i className="fas fa-shopping-cart"></i>
          </a>
        </li>
        <li>
          {isLoggedIn ? (
            <a href="/login" onClick={() => handleLogout()}>
              Logout
            </a>
          ) : (
            <a href="/login">Login</a>
          )}
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
