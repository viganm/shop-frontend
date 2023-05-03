import "./Navbar.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <ul>
        <a href="/">
          <button>Home</button>
        </a>
        <a href="/shop">
          <button>Shop</button>
        </a>
        <a href="/about">
          <button>About</button>
        </a>
      </ul>
      <div>
        <a href="/cart">
          <button href="/shopingCard" className="shopping-card">
            <i className="fas fa-shopping-cart"></i>
          </button>
        </a>
        <a href="/login">
          <button href="/login" className="login">
            Login
          </button>
        </a>
      </div>
    </div>
  );
};

export default Navbar;
