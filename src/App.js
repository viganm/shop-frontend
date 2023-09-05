import React, { useState, useEffect } from "react";
import Navbar from "./components/UI/Navbar";
import Footer from "./components/UI/Footer";
import Landing from "./pages/landing/Landing";
import Shop from "./pages/shop/Shop";
import About from "./pages/about/About";
import Login from "./pages/auth/Login";
import Cart from "./pages/shop/Cart";
import AddProductForm from "./components/ProductManagment/AddProductsForm";
import Checkout from "./pages/checkout/Checkout";
import Return from "./pages/about/Return";

import { CartContext } from "./CartContext";
import { Outlet, Route, Routes } from "react-router-dom";

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

  return (
    <div>
      <>
        <Navbar />
        <div>
          <CartContext.Provider value={{ addToCart }}>
            <Routes>
              <Route path="/" element={<Landing />}></Route>
              <Route path="/shop" element={<Shop addToCart={addToCart} />} />
              <Route path="/about" element={<About />} />
              <Route path="/cart" element={<Cart cartItems={cartItems} />} />
              <Route path="/product" element={<AddProductForm />} />
              <Route path="/login" element={<Login />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/return" element={<Return />} />
            </Routes>
            <Outlet />
          </CartContext.Provider>
        </div>
        <Footer />
      </>
    </div>
  );
}

export default App;
