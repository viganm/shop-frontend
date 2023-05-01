import React from "react";
import Card from "../UI/Card";
import Item from "./Item";
import "./ItemContainer.css";

const ItemContainer = (props) => {
  const items = props.products.map((products) => (
    <Item
      product_name={products.product_name}
      product_price={products.product_price}
      key={products.product_id}
    />
  ));

  return <Card className="expenses">{items}</Card>;
};

export default ItemContainer;
