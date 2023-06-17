import React, { useState, useEffect } from "react";
import Navbar from "./components/UI/Navbar";
import Footer from "./components/UI/Footer";
import Landing from "./pages/langing/Landing";
import Shop from "./pages/shop/Shop";
import About from "./pages/about/About";
import Login from "./pages/auth/Login";
import Cart from "./pages/shop/Cart";
import AddProductForm from "./components/ProductManagment/AddProductsForm";
import { CartContext } from "./CartContext";

function App() {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const storedCartItems = localStorage.getItem("cartItems");
    if (storedCartItems) {
      setCartItems(JSON.parse(storedCartItems));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (item) => {
    setCartItems([...cartItems, item]);
  };

  let Component;
  switch (window.location.pathname) {
    case "/":
      Component = Landing;
      break;
    case "/shop":
      Component = () => <Shop addToCart={addToCart} />;
      break;
    case "/about":
      Component = About;
      break;
    case "/login":
      Component = Login;
      break;
    case "/cart":
      Component = () => <Cart cartItems={cartItems} />;
      break;
    case "/product":
      Component = AddProductForm;
      break;
    default:
      break;
  }

  const componentStyle = {
    minHeight: "1100px",
  };

  return (
    <div>
      <>
        <Navbar />
        <div style={componentStyle}>
          <CartContext.Provider value={{ addToCart }}>
            {typeof Component === "function" ? (
              <Component />
            ) : (
              <Component cartItems={cartItems} addToCart={addToCart} />
            )}
          </CartContext.Provider>
        </div>
        <Footer />
      </>
    </div>
  );
}

export default App;
