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
          product_image={product[0].image}
          product_name={product[0].product_name}
          product_price={product[0].product_price}
          product_id={product[0].product_id}
          key={product[0].product_id}
        />
      ))}
    </Card>
  );
};

export default ItemContainerCart;
