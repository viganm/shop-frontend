import React from "react";
import Card from "../UI/Card";
import Item from "./Item";
import "./ItemContainer.css";

const ItemContainer = (props) => {
  return (
    <Card className="expenses">
      {props.products.map((products) => (
        <Item
          product_image={products.product_image}
          product_name={products.product_name}
          product_price={products.product_price}
          key={products.product_id}
        />
      ))}
    </Card>
  );
};

export default ItemContainer;
