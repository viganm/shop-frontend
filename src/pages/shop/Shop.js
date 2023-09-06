import React, { useState, useEffect } from "react";
import ItemContainer from "../../components/items/ItemContainer";

const Shop = () => {
  const [items, setItems] = useState([]);

  const getProducts = async () => {
    const res = await fetch(`${process.env.REACT_APP_ENV}/products`, {
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

  return <ItemContainer products={items} />;
};

export default Shop;
