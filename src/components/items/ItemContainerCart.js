import React from "react";
import ItemCart from "./ItemCart";
import Card from "../UI/Card";
import "./ItemContainerCart.css";

const ItemContainerCart = (props) => {
  return (
    <Card className="expenses-cart">
      <h2>Shopping Cart</h2>
      {props.products.map((product) => (
        <ItemCart
          product_image={product.image}
          product_name={product.product_name}
          product_price={product.product_price}
          product_id={product.product_id}
          key={product.product_id}
        />
      ))}
    </Card>
  );
};

export default ItemContainerCart;
