import "./Navbar.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <ul>
        <button to="/">Home</button>
        <button to="/shop">Shop</button>
        <button to="/about">About</button>
      </ul>
      <div>
        <button className="shopping-card">
          <i className="fas fa-shopping-cart"></i>
        </button>
        <button to="/login" className="login">
          Login
        </button>
      </div>
    </div>
  );
};

export default Navbar;
