import React from "react";
import "./Item.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

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
        <div className="fav__buttons">
          <button onClick={clickHandler}>Buy</button>
          <button onClick={clickHandler} className="favorite__button">
            <i class="fa-solid fa-heart"></i>
          </button>
        </div>
      </Card>
    </div>
  );
};

export default Item;
