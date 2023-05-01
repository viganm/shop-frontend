import React, { useState, useEffect } from "react";

import ItemContainer from "./components/items/ItemContainer";
import Navbar from "./components/UI/Navbar";

function App() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/products")
      .then((response) => response.json())
      .then((data) => setItems(data));
  }, []);

  console.log([items]);
  return (
    <div>
      <Navbar />
      <ItemContainer products={[items]} />
    </div>
  );
}

export default App;
