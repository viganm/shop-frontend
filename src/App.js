// import React, { useState, useEffect } from "react";

import Navbar from "./components/UI/Navbar";
import Footer from "./components/UI/Footer";

import Landing from "./pages/langing/Landing";
import Shop from "./pages/shop/Shop";
import About from "./pages/about/About";
import Login from "./pages/auth/Login";
import ShoppingCart from "./pages/shop/ShoppingCart";
// import ProductManagement from "./pages/management/ProductManagement";

import AddProductForm from "./components/ProductManagment/AddProductsForm";

function App() {
  let Component;
  switch (window.location.pathname) {
    case "/":
      Component = Landing;
      break;
    case "/shop":
      Component = Shop;
      break;
    case "/about":
      Component = About;
      break;
    case "/login":
      Component = Login;
      break;
    case "/cart":
      Component = ShoppingCart;
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
          <Component />
        </div>
        <Footer />
      </>
    </div>
  );
}

export default App;
