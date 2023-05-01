import "./Navbar.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <ul>
        <button>Home</button>
        <button>Shop</button>
        <button>About</button>
        <button className="shopping-card">
          <i className="fas fa-shopping-cart"></i>
        </button>
      </ul>
      <button className="login">Login</button>
    </div>
  );
};

export default Navbar;
