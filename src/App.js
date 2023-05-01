import React, { useState, useEffect } from "react";

import ItemContainer from "./components/items/ItemContainer";
import Navbar from "./components/UI/Navbar";

function App() {
  const [items, setItems] = useState([]);

  const getProducts = async () => {
    const res = await fetch("http://localhost:3001/products");
    let items = await res.json();
    setItems(items.products);
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div>
      <Navbar />
      <ItemContainer products={items} />
    </div>
  );
}

export default App;
