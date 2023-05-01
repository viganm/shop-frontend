import "./Navbar.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <ul>
        <button>Home</button>
        <button>Shop</button>
        <button>About</button>
      </ul>
      <div>
        <button className="login">Login</button>
        <button className="shopping-card">
          <i className="fas fa-shopping-cart"></i>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
