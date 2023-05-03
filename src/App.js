// import React, { useState, useEffect } from "react";

import Navbar from "./components/UI/Navbar";

import Landing from "./pages/langing/landing";
import Shop from "./pages/shop/Shop";
import About from "./pages/about/About";
import Login from "./pages/auth/Login";
import ShoppingCart from "./pages/shop/ShoppingCart";

ShoppingCart;

function App() {
  console.log(window.location);
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
  }
  return (
    <div>
      <>
        <Navbar />
        <Component />
      </>
    </div>
  );
}

export default App;
