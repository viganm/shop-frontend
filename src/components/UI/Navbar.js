import "./Navbar.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <ul className="nav-links">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/shop">Shop</a>
        </li>
        <li>
          <a href="/about">About</a>
        </li>
      </ul>
      <div className="nav-right">
        <a href="/cart" className="nav-icon">
          <i className="fas fa-shopping-cart"></i>
        </a>
        <a href="/login" className="nav-button">
          Login
        </a>
      </div>
    </div>
  );
};

export default Navbar;
