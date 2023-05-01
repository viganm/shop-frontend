import React from "react";
import "./Item.css";

import Card from "../UI/Card";

const Item = (props) => {
  const clickHandler = () => {
    console.log("BUY");
  };

  return (
    <div className="item" key={props.product_id}>
      <Card className="item-card">
        <div className="item__description">
          <h2>{props.product_name}</h2>
          <div className="item__price">${props.product_price}</div>
        </div>
        <button onClick={clickHandler}>Buy</button>
      </Card>
    </div>
  );
};

export default Item;
