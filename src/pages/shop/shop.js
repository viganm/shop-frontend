import React, { useState, useEffect } from "react";
import "./Shop.css";

/*import ItemContainer from "../../components/items/ItemContainer";*/
import ProductExample from "../../components/items/ProductExample";

const Shop = () => {
  const [items, setItems] = useState([]);

  const getProducts = async () => {
    const res = await fetch("http://localhost:3001/products", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    let items = await res.json();
    setItems(items.products);
  };

  useEffect(() => {
    getProducts();
  }, []);

  /*return <ItemContainer products={items} />;*/
  return (
    <div className="page-wrapper">
      <ProductExample />
      <ProductExample />
      <ProductExample />
      <ProductExample />
      <ProductExample />
      <ProductExample />
      <ProductExample />
      <ProductExample />
      <ProductExample />
      <ProductExample />
      <ProductExample />
      <ProductExample />
      <ProductExample />
      <ProductExample />
      <ProductExample />
      <ProductExample />
      <ProductExample />
      <ProductExample />
      <ProductExample />
      <ProductExample />
      <ProductExample />
      <ProductExample />
      <ProductExample />
      <ProductExample />
    </div>
  );
};

export default Shop;
