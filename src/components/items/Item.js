import React from "react";
import "./Item.css";

import Card from "../UI/Card";

const item = (props) => {
  const clicktHandler = () => {
    console.log("BUY");
  };

  return (
    <div className="item">
      <Card className="item-card">
        <div className="item__description">
          <h2>{props.title}</h2>
          <div className="item__price">${props.amount}</div>
        </div>
        <button onClick={clicktHandler}>Buy</button>
      </Card>
    </div>
  );
};

export default item;
